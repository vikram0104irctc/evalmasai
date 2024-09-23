const jwt = require("jsonwebtoken");
require("dotenv").config();

const studentAddValidator = async (req, res, next) => {
  const token = req.headers.token;
  try {
    if (token) {
      const verification = jwt.verify(token, process.env.JWT_SECRET_KEY);
      if (!verification || (verification.role !== "admin")) {
        return res.status(403).send("Unautorized");
      }
      next();
    }
  } catch (e) {
    console.error("Error", e);
    res.status(500).send("Internel Server Error");
  }
};

module.exports = { studentAddValidator };
