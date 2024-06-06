const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
  title: {
    type: {
      ar: String,
      en: String,
    },
    required: true,
  },
  category: {
    type: String,
    enum: [
      "case_studies",
      "strategy_planning",
      "social_media",
      "brand_development",
      "content_marketing",
      "analytics",
    ],
  },
  photo: String,
  content: {
    type: {
      ar: String,
      en: String,
    },
  },
});
const project = mongoose.model("project", projectSchema);
module.exports = project;
