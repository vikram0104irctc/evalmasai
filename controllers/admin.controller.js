const { adminconnection } = require("../sql/admin.connection");

function allAdmin(req, res) {
  try {
    adminconnection.query(
      `
      SELECT * FROM admin 
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

function createAdmin(req, res) {
  const { admin_name, admin_email, school_id, admin_password, role } = req.body;
  try {
    adminconnection.query(
      `
      INSERT INTO admin
      (admin_name, admin_email, admin_password, role, school_id)
      values
      ('${admin_name}', '${admin_email}', '${admin_password}', '${role}', ${school_id})
      `,
      (err) => {
        if (err) {
          return res.send("Invalid Data Types");
        }
        res.status(201).send({ Message: "New Admin Added" });
      }
    );
  } catch (e) {
    console.error("Error", e);
    res.status(500).send("Internel Error");
  }
}

module.exports = { allAdmin, createAdmin };
