const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AnswerSchema = new Schema({
  value: {
    type: String,
  },
  correct: {
    type: Boolean,
  },
});
const SyllabusSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answer: [
    {
      value: {
        type: String,
      },
      correct: {
        type: Boolean,
      },
    },
  ],
  image: {
    type: String,
  },
  learn: {
    type: String,
  },
  subject: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  grade: {
    type: Schema.Types.ObjectId,
    ref:"Grade"
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
module.exports = mongoose.model("Syllabus", SyllabusSchema);
