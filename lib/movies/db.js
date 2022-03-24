const { Client } = require("pg");
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