const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    student_id: {
      type: Number,
    },
    student_name: {
      type: String,
    },
    student_age: {
      type: Number,
    },
    grade: {
      type: Number,
    },
    school_id: {
      type: Number,
    },
  },
  { versionKey: false, timestamps: true }
);

const STUDENTS = mongoose.model("student", studentSchema);

module.exports = { STUDENTS };
