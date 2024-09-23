const mysql = require("mysql2");
require("dotenv").config();

const adminconnection = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12732929",
  password: process.env.SQL_PASSWORD,
  database: "sql12732929",
  port: 3306
});

adminconnection.query(`
  CREATE TABLE IF NOT EXISTS admin(
  admin_id INT PRIMARY KEY AUTO_INCREMENT,
  admin_name VARCHAR(255) NOT NULL,
  admin_email VARCHAR(255) NOT NULL,
  admin_password VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL,
  school_id INT NOT NULL)
`);

module.exports = { adminconnection };
