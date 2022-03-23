const { Client } = require("pg");
const client = new Client({
  user: "hutvucniephfiu",//DB_USER
  host: "ec2-3-216-221-31.compute-1.amazonaws.com",//DB_HOST
  database: "dbggjo3jk0bj3t",//DB_NAME
  password: "43e6e892b54dc40d0bdcb2849012bea4340f3147b79f199dd7a30ea51df20bce",//DB_PASSWORD
  port: 5432,//DB_PORT
  //connectionString: connectionString,
  ssl: { 
    require:true,
    rejectUnauthorized: false
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});
client.connect();

const query = {
  text: "Select id, url, title, views, thumbnail, created_at from movie",
};

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
  const movies = await selectAll(db, 'Select id, url, title, views, thumbnail, created_at from movie limit 5');
  //db.end();

  res.status(200).json({ movies });
}