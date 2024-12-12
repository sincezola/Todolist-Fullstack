import mysql from 'mysql2/promise';
import * as dotenv from 'dotenv'

dotenv.config();

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "root",
  database: process.env.MYSQL_DB || "taskdb"
});

export default connection;