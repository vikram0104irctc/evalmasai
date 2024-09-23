const { createAdmin, allAdmin } = require("../controllers/admin.controller");

const adminRoutes = require("express").Router();

adminRoutes.post("/", createAdmin);

adminRoutes.get("/", allAdmin);

module.exports = { adminRoutes };
