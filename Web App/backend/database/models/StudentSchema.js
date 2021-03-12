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
    gender: [{
      type: String,
         required: true,
    }],
    gradeID: [{
      type: String,
      required: true,
    }],
    absentDays: [{
      type: String,
      default: "Under-7",
      required: true,
    }],
    usedLearn: [{
      type: Number,
      default: "0",
      required: true,
    }],
    watchedVideo: [{
      type: Number,
      default: "0",
      required: true,
    }],
    usedQuiz: [{
      type: Number,
      default: "0",
      required: true,
    }],
    avgQuizMarks: [{
      type: Number,
      default: "0",
      required: true,
    }],
    parentResponse: [{
      type: String,
      default: ['Yes'],
      required: true,
    }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);
