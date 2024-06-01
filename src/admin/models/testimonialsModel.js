const mongoose = require("mongoose");

const testimonialsSchema = new mongoose.Schema({
  name: {
    type: {
      ar: String,
      en: String,
    },
  },
  job: {
    type: {
      ar: String,
      en: String,
    },
  },
  description: {
    type: {
      ar: String,
      en: String,
    },
  },
  img: String,
});

const Testimonials = mongoose.model("Testimonials", testimonialsSchema);

module.exports = Testimonials;
