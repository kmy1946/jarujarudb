import { useEffect, useState } from "react";
import { client, pool } from "../../../lib/movies/db";

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

  console.log('\n\ntotalCount:',pool.totalCount,'\n\n\n')
  console.log('\n\nidleCount:',pool.idleCount,'\n\n\n')
  console.log('\n\nwaitingCount:',pool.waitingCount,'\n\n\n')
  
  

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