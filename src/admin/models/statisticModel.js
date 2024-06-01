const mongoose = require("mongoose");

// Define the statistics schema
const statisticsSchema = new mongoose.Schema({
  title: {
    type: {
      ar: String,
      en: String,
    },
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
});

const Statistics = mongoose.model("Statistics", statisticsSchema);

module.exports = Statistics;
