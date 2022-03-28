import { pool } from "../../lib/movies/db";

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

  const query_ = `Select * from movie limit 10`
  
  const obj = await selectAll(db, query_);
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', '*')
  
  res.status(200).json( obj );
}