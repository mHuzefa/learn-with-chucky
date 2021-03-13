const express = require("express");
const Grade = require("../database/models/GradeSchema");
const router = express.Router();

router.get("/", async (req, res) => {
  const grades = await Grade.find({});
  res.send(grades);
});
router.post("/add_grade", async (req, res) => {
  const grade = new Grade({
    GradeID: req.body.GradeID,
    gradeName: req.body.gradeName,
  });
  await grade
    .save()
    .then(() => {
      res.json({
        message: "Grade Information Saved",
      });
    })
    .catch(() => {
      res.json({
        message: "Error Occured while saving the Data.",
      });
    });
});
module.exports = router;
