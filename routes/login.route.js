const { adminLogin } = require("../controllers/login.controller");

const loginRoute = require("express").Router();

loginRoute.post("/", adminLogin);

module.exports = { loginRoute };
