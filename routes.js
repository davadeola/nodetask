const express = require("express");
const router = express.Router();

const { getAllStudents, addStudent, getStudent } = require("./controller");

//define actions on the / route
router.route("/").get(getAllStudents).post(addStudent);

router.route("/:studentId").get(getStudent).put(updateStudent);

module.exports = router;
