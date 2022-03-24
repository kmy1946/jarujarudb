import { client } from "../../../lib/movies/db";

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
  const movies = await selectAll(db, 'Select * from movie ORDER BY created_at DESC limit 16');
  //db.end();

  res.status(200).json({ movies });
}