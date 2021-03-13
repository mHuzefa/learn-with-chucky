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
    gender: [
      {
        type: String,
        required: true,
      },
    ],
    GradeID: [
      {
        type: String,
        required: true,
      },
    ],
    raisedhands: {
      type: Array,
      default: ["0"],
      required: true,
    },

    VisITedResources: {
      type: Array,
      default: ["0"],
      required: true,
    },
    AnnouncementsView: {
      type: Array,
      default: ["0"],
      required: true,
    },
    Discussion: {
      type: Array,
      default: ["0"],
      required: true,
    },

    ParentAnsweringSurvey: {
      type: Array,
      default: ["Yes"],
      required: true,
    },
    StudentAbsenceDays: {
      type: Array,
      default: ["Under-7"],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);
