const { connect } = require("./connection");

connect.connect();

exports.getAllStudents = async (req, res) => {
  await connect.query(
    "SELECT * FROM student_detail",
    (err, results, fields) => {
      if (err) {
        return res.status(500).json({ success: false, error: err });
      } else {
        return res.status(200).json({ result: results, success: true });
      }
    }
  );
};

exports.addStudent = async (req, res) => {
  try {
    const { id, name, course } = req.body;

    await connect.query(
      "INSERT INTO student_detail (id, name, course) VALUES (?,?,?)",
      [id, name, course],
      (err, results, fields) => {
        if (err) {
          return res.status(500).json({ success: false, error: err });
        } else {
          return res.status(201).json({ results: results, success: true });
        }
      }
    );
  } catch (error) {
    console.log("Something went wrong " + error);
    return res
      .status(500)
      .json({ success: false, serverError: "Something went wrong " });
  }
};

exports.getStudent = async (req, res) => {
  try {
    const id = req.params.studentId;

    await connect.query(
      "SELECT * FROM student_detail WHERE id = ?",
      [id],
      (err, results, fields) => {
        if (err) {
          return res.status(500).json({ success: false, error: err });
        } else {
          return res.status(200).json({ result: results, success: true });
        }
      }
    );
  } catch (error) {
    console.log("Something went wrong " + error);
    return res
      .status(500)
      .json({ success: false, serverError: "Something went wrong " });
  }
};
