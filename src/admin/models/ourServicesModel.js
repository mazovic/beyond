const mongoose = require("mongoose");
const ourServiceSchema = new mongoose.Schema({
  title: {
    type: {
      ar: String, // Arabic title
      en: String, // English title
    },
    required: true,
    trim: true,
  },
  paragraph: {
    type: {
      ar: String,
      en: String,
    },
    required: true,
    trim: true,
  },
});

const Services = mongoose.model("Services", ourServiceSchema);
module.exports = Services;
