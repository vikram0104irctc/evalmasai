const { ADMIN } = require("../mongodb/admin.model");
const { adminconnection } = require("../sql/admin.connection");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const key = process.env.JWT_SECRET_KEY;

async function adminLogin(req, res) {
  const { admin_email, admin_password } = req.body;
  const adminconnectionPromise = adminconnection.promise();
  try {
    let query = `SELECT * FROM admin WHERE admin_email = ?`;
    let [user] = await adminconnectionPromise.query(query, [admin_email]);
    if (user[0].admin_password !== admin_password) {
      return res.status(401).send("Unathorized");
    }

    if (user[0].admin_password === admin_password) {
      const token = jwt.sign(
        {
          admin_email: admin_email,
          id: user[0]._id,
          role: user[0].role,
        },
        key,
        { expiresIn: "1h" }
      );
      return res.send({ Message: token, role :  user[0].role});
    }
  } catch (e) {
    console.error("Error", e);
    return res.status(500).send("Internel Server Error");
  }
}

module.exports = { adminLogin };
