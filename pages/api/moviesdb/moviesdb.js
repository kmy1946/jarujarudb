import { useEffect, useState } from "react";
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
  const pages = 4
  
  const movies = await selectAll(db, `Select * from movie ORDER BY created_at limit ${pages}`);
  db.end();

  //console.log(res.status(200).json({ movies }))
  res.status(200).json({ movies });
}