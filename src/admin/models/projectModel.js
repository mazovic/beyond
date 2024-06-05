const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
  title: {
    type: {
      ar: String,
      en: String,
    },
    required: true,
  },
  category: String,
  photo: String,
  content: {
    type: {
      ar: String,
      en: String,
    },
  },
});
const projectModel = mongoose.model("projectModel", projectSchema);
module.exports = projectModel;
