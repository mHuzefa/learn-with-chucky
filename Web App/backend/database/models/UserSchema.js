const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserScehma = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isTeacher: {
      type: Boolean,
    },
    childName: {
      type: String,
    },
    gender: {
      type: String,
      required: true,
    },
    gradeID: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserScehma);
