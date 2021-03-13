const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GradeSchema = new Schema({
  GradeID: {
    type: String,
    required: true,
  },
  gradeName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Grade", GradeSchema);
