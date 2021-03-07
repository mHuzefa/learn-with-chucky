const express = require("express");
const Student = require("../database/models/StudentSchema");
const router = express.Router();
const Teacher = require("../database/models/UserSchema");
router.get("/", async (req, res) => {
  const students = await Student.find({});
  res.send(students);
});
router.get("/:studentId", async (req, res) => {
  const student = await Student.findOne({ username: req.params.studentId });
  res.send(student);
});
router.get("/:teacherId", async (req, res) => {
  const teacherStds = await Student.find({ teacher: req.params.teacherId });
  res.send(teacherStds);
});
router.post("/create_student_account", async (req, res) => {
  const student = new Student({
    teacher: req.body.teacher,
    username: req.body.username,
    password: req.body.password,
    gender: req.body.gender,
    gradeID: req.body.gradeID,
  });
  await student
    .save()
    .then(() => {
      res.json({
        message: "Student Account Created",
      });
    })
    .catch(() => {
      res.json({
        message: "Error Occured",
      });
    });
});

module.exports = router;
