const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema(
  {
    teacher: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      // required: true,
    },
    gradeID: {
      type: String,
      //required: true,
    },
    absentDays: {
      type: Number,
    },
    usedLearn: {
      type: Number,
    },
    watchedVideo: {
      type: Number,
    },
    usedQuiz: {
      type: Number,
    },
    avgQuizMarks: {
      type: Number,
    },
    parentResponse: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);
