const express = require("express");
const Student = require("../database/models/StudentSchema");
const router = express.Router();
const Teacher = require("../database/models/UserSchema");
router.get("/", async (req, res) => {
  const students = await Student.find({});
  res.send(students);
});
router.get("/:studentId", async (req, res) => {
  const student = await Student.find(
    { username: req.params.studentId },
    {
      _id: 0,
      gender: 1,
      gradeID: 1,
      usedLearn: 1,
      watchedVideo: 1,
      usedQuiz: 1,
      avgQuizMarks: 1,
      parentResponse: 1,
      absentDays: 1,
    }
  );
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
    watchedVideo: req.body.watchedVideo,
    usedQuiz: req.body.usedQuiz,
    avgQuizMarks: req.body.avgQuizMarks,
    parentResponse: req.body.parentResponse,
  });
  if (req.body.absentDays) {
    student.absentDays = req.body.absentDays;
  }
  if (req.body.usedLearn) {
    student.usedLearn = req.body.usedLearn;
  }

  await student
    .save()
    .then(() => {
      res.json({
        message: "Student Account Created",
      });
    })
    .catch((err) => {
      res.json({
        message: err,
      });
    });
});

module.exports = router;
