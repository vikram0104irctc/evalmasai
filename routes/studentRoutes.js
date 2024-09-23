const express = require("express");
const router = express.Router();
const validateStudent = require("../middleware/validator");
const {
  getAllStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");
const { adminValidator } = require("../middleware/adminvalidation");
const { studentAddValidator } = require("../middleware/addstudent.validator");
const { studentEditValidator } = require("../middleware/editvalidator");

/**
 * @swagger
 *  tag : get
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a list of all students.
 *         ref : "http://localhost:9000/students"
 */

router.get("/", adminValidator, getAllStudents);

router.post("/", validateStudent, adminValidator, studentAddValidator, addStudent);

router.put("/:id", validateStudent, adminValidator, 
 studentEditValidator,updateStudent);

router.delete("/:id", adminValidator, studentAddValidator, deleteStudent);

module.exports = router;
