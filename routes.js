const express = require("express");
const router = express.Router();

const { getAllStudents, addStudent } = require("./controller");

//define actions on the / route
router.route("/").get(getAllStudents).post(addStudent);

module.exports = router;
