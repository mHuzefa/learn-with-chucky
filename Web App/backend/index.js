const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongodbHelper = require("./database/dbConnect/helper");
const UserRouter = require("./routes/UserRouter");
const QuestionRouter = require("./routes/QuestionRoute");
const studentRouter = require("./routes/StudentRouter");
const gradeRouter = require("./routes/GradeRouter");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongodbHelper
  .once("open", () => {
    console.log("connection successful");
  })
  .on("error", (error) => {
    console.error("Error => ", error);
  });

app.use("/api/users", UserRouter);
app.use("/api/questions", QuestionRouter);
app.use("/api/students", studentRouter);
app.use("/api/grades", gradeRouter);
app.listen(5000, () => {
  console.log("Port Connected");
});
