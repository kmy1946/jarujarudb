import { pool } from "../../../lib/movies/db";

/* pooling */
const selectAll_ = (db, query) => {
  return new Promise((resolve, reject) => {
    pool.query(query, (err, rows) => {
      if (err) return reject(err);
      return resolve(rows);
    });
  });
};

export default async function handler(req, res) {
  const db = pool;
  const pages = 4
  
  const movies = await selectAll_(db, `Select * from movie ORDER BY created_at limit ${pages}`);

  console.log('\ntotalCount:',pool.totalCount,'\n')
  console.log('\nidleCount:',pool.idleCount,'\n')
  console.log('\nwaitingCount:',pool.waitingCount,'\n')

  //console.log(res.status(200).json({ movies }))
  res.status(200).json({ movies });
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