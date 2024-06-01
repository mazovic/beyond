const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
  title: {
    type: {
      ar: String, // Arabic title
      en: String, // English title
    },
    trim: true,
  },
  companyBio: {
    title: {
      ar: String,
      en: String,
    },
    paragraph: {
      ar: String,
      en: String,
    },
  },
  whatWeDo: {
    title: {
      ar: String,
      en: String,
    },
    paragraph: {
      ar: String,
      en: String,
    },
  },
  ourVision: {
    title: {
      ar: String,
      en: String,
    },
    paragraph: {
      ar: String,
      en: String,
    },
  },
  ourMission: {
    title: {
      ar: String,
      en: String,
    },
    paragraph: {
      ar: String,
      en: String,
    },
  },
  ourGoals: {
    title: {
      ar: String,
      en: String,
    },
    paragraph: {
      ar: String,
      en: String,
    },
  },
  ourPromise: {
    title: {
      ar: String,
      en: String,
    },
    paragraph: {
      ar: String,
      en: String,
    },
  },
});

const aboutUs = mongoose.model("aboutUs", aboutSchema);
module.exports = aboutUs;
