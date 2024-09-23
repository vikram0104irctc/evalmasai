const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12732929",
  password: process.env.SQL_PASSWORD,
  database: "sql12732929",
  port: 3306
});

connection.query(`
  CREATE TABLE IF NOT EXISTS school(
  school_id INT PRIMARY KEY AUTO_INCREMENT,
  school_name VARCHAR(255) NOT NULL,
  school_address VARCHAR(255) NOT NULL)
`);

module.exports = { connection };
