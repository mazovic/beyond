const mongoose = require("mongoose");

const evaluationSchema = new mongoose.Schema({
  htmlContent: {
    type: {
      ar: String,
      en: String,
    },
    required: true,
    trim: true,
  },
});

const Evaluation = mongoose.model("Evaluation", evaluationSchema);

module.exports = Evaluation;
