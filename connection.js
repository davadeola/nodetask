const mysql = require("mysql");

exports.connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Abimbola02",
  database: "students",
});
