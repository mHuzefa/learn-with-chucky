const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongodbHelper = require("./database/dbConnect/helper");
const UserRouter = require("./routes/UserRouter");
const QuestionRouter = require("./routes/QuestionRoute");

mongodbHelper
  .once("open", () => {
    console.log("connection successful");
  })
  .on("error", (error) => {
    console.error("Error => ", error);
  });

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", UserRouter);
app.use("/api/questions", QuestionRouter);

app.listen(5000, () => {
  console.log("Port Connected");
});
