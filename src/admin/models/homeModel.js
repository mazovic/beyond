const mongoose = require("mongoose");
const homeSchema = new mongoose.Schema({
  title: {
    type: {
      ar: String, // Arabic title
      en: String, // English title
    },
    trim: true,
  },
  subTitle: {
    ar: [String],
    en: [String],
  },
  statisticTitle: {
    type: {
      ar: String,
      en: String,
    },
  },
  statistics: [
    {
      title: {
        type: {
          ar: String,
          en: String,
        },
      },
      number: String,
    },
  ],
  quote: {
    type: {
      ar: String, // Arabic title
      en: String, // English title
    },
  },

  testimonialTitle: {
    type: {
      ar: String,
      en: String,
    },
  },
  testimonialSubTitle: {
    type: {
      ar: String,
      en: String,
    },
  },
  testimonials: [
    {
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
    },
  ],
  certificatesTitle: {
    type: {
      ar: String,
      en: String,
    },
  },
  certificates: [
    {
      title: {
        type: {
          ar: String,
          en: String,
        },
      },
      img: String,
      year: Number,
      issuedBy: String,
    },
  ],
});

const home = mongoose.model("home", homeSchema);
module.exports = home;
