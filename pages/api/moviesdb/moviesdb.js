import { pool } from "../../../lib/movies/db";

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

  const PAGE_NUM = 8;//1ページに表示する件数
  const offset_coefficient = !req.query || !req.query.page ? 0: req.query.page - 1;//ページ番号
  //count(*) as count
  const query_ = `Select row_number() over() as no, *,
                  COUNT(*) OVER () AS count
                  from movie "WITH" (NOLOCK)
                  ORDER BY created_at ASC
                  limit ${PAGE_NUM}
                  OFFSET ${PAGE_NUM*offset_coefficient}`
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
  //console.log('\n\n\n',netanotane_list_list,'\n\n\n')
  //res.end(JSON.stringify(netanotane_list_list));
  //console.log(JSON.stringify(netanotane_list_list))
  //console.log('JSON.stringfy(dafsdf)\n',JSON.stringify(book_list_list))
}

/*
const selectAll = (db, query) => {
  return new Promise((resolve, reject) => {
    client.query(query, (err, rows) => {
      if (err) return reject(err);
      return resolve(rows);
    });
  });
};

export default async function handler(req, res) {
  const db = client;
  const pages = 4
  
  const movies = await selectAll(db, `Select * from movie ORDER BY created_at limit ${pages}`);
  

  //console.log(res.status(200).json({ movies }))
  res.status(200).json({ movies });
  db.end();
}
*/