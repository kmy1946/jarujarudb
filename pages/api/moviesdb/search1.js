const { Pool } = require("pg");
const connectionString = `postgres://hutvucniephfiu:43e6e892b54dc40d0bdcb2849012bea4340f3147b79f199dd7a30ea51df20bce@ec2-3-216-221-31.compute-1.amazonaws.com:5432/dbggjo3jk0bj3t`;
const pool = new Pool({
  connectionString: connectionString,
  ssl: { 
    require:true,
    rejectUnauthorized: false
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  max:20,//保持コネクション数
  idleTimeoutMillis: 30000//自動切断ミリ秒
});

const selectAll = (db, query) => {
  return new Promise((resolve, reject) => {
    pool.query(query, (err, rows) => {
      if (err) return reject(err);
      return resolve(rows);
    });
  });
};

export default async function handler(req, res) {
  const db = pool;

  const keyword = req.query.searchKeyword ? req.query.searchKeyword : 'ジャルジャル';

  const ORDER_BY = 'ASC'
  const PAGE_NUM = 16;//1ページに表示する件数
  const offset_coefficient = !req.query || !req.query.page ? 0: req.query.page - 1;//ページ番号

  const TAG_NAME = '%漫才%';

  const list = [req.query.searchkeywordlist]//リストを受け取る

  console.log('\n\nlist:',req.query.searchkeywordlist)

  const TAG_NAMES = list.join('%')// ジャル%ネタ%のタネ

  const query_ = `Select row_number() over() as no, *,
                  COUNT(*) OVER () AS count
                  from movie "WITH" (NOLOCK)
                  where title LIKE '%${TAG_NAMES}%'
                  ORDER BY created_at ${ORDER_BY}
                  limit ${PAGE_NUM}
                  OFFSET ${PAGE_NUM*offset_coefficient}
                  `//

  //全て、昇順、PAGE_NUM制限、offset_coefficient
  const netanotane_list = await selectAll(db, query_);

  const netanotaneDatas = netanotane_list.rows[0]['count']//１つ目から総データ数取得

  netanotane_list["count"] = Math.ceil(netanotaneDatas / PAGE_NUM)//Math.ceil(book_list["count"] / PAGE_NUM)//総ページ数
  //countに計算結果を代入
  const netanotane_list_list = netanotane_list//.rows

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.status(200).json( netanotane_list_list );
}