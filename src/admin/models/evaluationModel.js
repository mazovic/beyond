const mongoose = require("mongoose");

const evaluationSchema = new mongoose.Schema({
  htmlContent: {
    type: String,
    required: true,
  },
});

const Evaluation = mongoose.model("Evaluation", evaluationSchema);

module.exports = Evaluation;
