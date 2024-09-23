const validateStudent = (req, res, next) => {
  const { student_id, student_name, student_age, grade, school_id } = req.body;

  if (!student_id || !student_name || !grade || !student_age || !school_id) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (student_age < 0 || student_age > 150) {
    return res.status(400).json({ error: "Invalid age provided" });
  }

  next();
};

module.exports = validateStudent;
