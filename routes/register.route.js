const { adminRegister } = require("../controllers/register.controller");

const registerRoute = require("express").Router();

registerRoute.post("/", adminRegister);

module.exports = { registerRoute };
