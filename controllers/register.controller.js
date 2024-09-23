const { ADMIN } = require("../mongodb/admin.model");

function adminRegister(req, res) {
  const { admin_email, password } = req.body;
  try {
    ADMIN.create({
      admin_email,
      password,
    });
    return res.status(201).send({ Message: "Admin Credintials Created" });
  } catch (e) {
    console.error("Error", e);
    res.status(500).send("Internel Server Error");
  }
}

module.exports = { adminRegister };
