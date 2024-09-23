const { STUDENTS } = require("../mongodb/model");

const getAllStudents = async (req, res) => {
  const { grade, sort, page_number = 1, page_size = 10 } = req.query;
  try {
    const filterby = {};
    const sortby = {};
    if (grade) {
      filterby.grade = grade;
    }
    if (sort) {
      sortby[sort] = 1;
    }
    const students = await STUDENTS.find(filterby)
      .sort(sortby)
      .skip((page_number - 1) * page_size)
      .limit(page_size);
    return res.status(200).send(students);
  } catch (e) {
    console.error("Error", e);
    res.status(500).send("Internal Server Error");
  }
};

const addStudent = async (req, res) => {
  const { student_id, student_name, student_age, grade, school_id } = req.body;
  try {
    STUDENTS.create({
      student_id,
      student_name,
      student_age,
      grade,
      school_id,
    });
    res.status(201).json({ Message: "Student Added" });
  } catch (e) {
    res.status(500).send("Internel Error");
  }
};

const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { student_id, student_name, student_age, grade, planet, school_id } =
    req.body;
  try {
    const students = await STUDENTS.findOneAndUpdate(
      { _id: id },
      { student_id, student_name, student_age, grade, school_id }
    );
    return res.send("Data updated");
  } catch (e) {
    console.error("Error", e);
    return res.status(500).send("Internel Error");
  }
};

const deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const students = await STUDENTS.findOneAndDelete({ _id: id });
    return res.status(200).send("Deleted");
  } catch (e) {
    return res.status(500).send("Error");
  }
};

module.exports = {
  getAllStudents,
  addStudent,
  updateStudent,
  deleteStudent,
};
