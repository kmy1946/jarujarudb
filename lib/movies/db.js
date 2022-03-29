const { Pool } = require("pg");
/* 環境変数 */
const DB_USER = process.env.NEXT_PUBLIC_DB_USER;
const DB_PASSWORD = process.env.NEXT_PUBLIC_DB_PASSWORD;
const DB_HOST = process.env.NEXT_PUBLIC_DB_HOST;
const DB_PORT = process.env.NEXT_PUBLIC_DB_PORT;
const DB_NAME = process.env.NEXT_PUBLIC_DB_NAME;

/* プール */
const connectionString = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
export const pool = new Pool({
  connectionString: connectionString,
  ssl: { 
    require:true,
    rejectUnauthorized: false
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  max:20,//保持コネクション数
  idleTimeoutMillis: 30000//自動切断ミリ秒
});
/*
export const client = new Client({
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
*/