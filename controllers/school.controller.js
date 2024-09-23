const { connection } = require("../sql/connection");

function allSchool(req, res) {
  try {
    connection.query(
      `
      SELECT * FROM school
      `,
      (err, result) => {
        if (err) {
          return res.status(500).send("Internel Error");
        }
        res.status(200).send(result);
      }
    );
  } catch (e) {
    console.error("Error", e);
    res.status(500).send("Internel Error");
  }
}

function createSchool(req, res) {
  const { school_name, school_address } = req.body;
  try {
    connection.query(
      `
      INSERT INTO school
      (school_name, school_address)
      values
      ('${school_name}', '${school_address}')
      `,
      (err, result) => {
        if (err) {
          return res.send("Invalid Data Types");
        }
        res.status(201).send({ Message: "New School Added" });
      }
    );
  } catch (e) {
    console.error("Error", e);
    res.status(500).send("Internel Error");
  }
}

module.exports = { createSchool, allSchool };
