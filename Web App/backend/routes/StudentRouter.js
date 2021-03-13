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
      GradeID: 1,
      StudentAbsenceDays: 1,
      Discussion: 1,
      AnnouncementsView: 1,
      ParentAnsweringSurvey: 1,
      VisITedResources: 1,
      raisedhands: 1,
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
    GradeID: req.body.GradeID,
    raisedhands: req.body.raisedhands,
    VisITedResources: req.body.VisITedResources,
    Discussion: req.body.Discussion,
    ParentAnsweringSurvey: req.body.ParentAnsweringSurvey,
  });
  if (req.body.StudentAbsenceDays) {
    student.StudentAbsenceDays = req.body.StudentAbsenceDays;
  }
  if (req.body.AnnouncementsView) {
    student.AnnouncementsView = req.body.AnnouncementsView;
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
