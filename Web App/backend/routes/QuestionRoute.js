const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Question = require("../database/models/SyllabusSchema");
router.get("/", async (req, res) => {
  const questions = await Question.find({});
  res.send(questions);
});
router.post("/add_question", async (req, res) => {
  const question = new Question({
    question: req.body.question,
    answer: req.body.answer,
    image: req.body.image,
    learn: req.body.learn,
    subject: req.body.subject,
    difficulty: req.body.difficulty,
    user: req.body.user,
  });
  await question
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
module.exports = router;
