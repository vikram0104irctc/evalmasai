const { createSchool, allSchool } = require("../controllers/school.controller");

const schoolRoutes = require("express").Router();

schoolRoutes.post("/", createSchool);

schoolRoutes.get("/", allSchool);

module.exports = { schoolRoutes };
