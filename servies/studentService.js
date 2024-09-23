const fs = require("fs-extra");
const path = require("path");
const filePath = path.join(__dirname, "../data/students.json");

const loadStudents = async () => {
  try {
    const data = await fs.readFile(filePath);
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const saveStudents = async (students) => {
  try {
    await fs.writeFile(filePath, JSON.stringify(students, null, 2));
  } catch (error) {
    throw new Error("Not able to save students informations");
  }
};

module.exports = { loadStudents, saveStudents };
