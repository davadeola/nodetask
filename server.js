const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");

dotenv.config({ path: ".env" });
const app = express();

app.use(express.json); //allows body parsing

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT} `
      .yellow.bold
  )
);
