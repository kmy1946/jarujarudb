import { client } from "../../../lib/movies/db";

const selectKantoujin = (db, query) => {
  return new Promise((resolve, reject) => {
    client.query(query, (err, rows) => {
      if (err) return reject(err);
      return resolve(rows);
    });
  });
};

export default async function handler(req, res) {
  const db = client;
  const movies = await selectKantoujin(db, `Select * from movie where title LIKE '%関東人%'`);
  db.end();

  res.status(200).json({ movies });
}