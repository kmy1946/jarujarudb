import { client } from "../../lib/movies/db";

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
  const movies = await selectAll(db, 'Select id, url, title, views, thumbnail, created_at from movie limit 8');
  //db.end();

  res.status(200).json({ movies });
}