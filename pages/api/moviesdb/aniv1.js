import { client } from "../../../lib/movies/db";

const selectAniv1 = (db, query) => {
  return new Promise((resolve, reject) => {
    client.query(query, (err, rows) => {
      if (err) return reject(err);
      return resolve(rows);
    });
  });
};

export default async function handler(req, res) {
  const db = client;
  const movies = await selectAniv1(db, `Select * from movie where title LIKE '%１億回%'`);
  db.end();

  res.status(200).json({ movies });
}