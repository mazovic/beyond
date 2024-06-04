const mongoose = require("mongoose");
const validator = require("validator");
const sharedSchema = new mongoose.Schema({
  phone: {
    type: String,
  },
  email: {
    type: String,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  address: {
    type: {
      ar: String,
      en: String,
    },
  },
  linkedinLink: {
    type: String,
  },
  facebookLink: {
    type: String,
  },
  instagramLink: {
    type: String,
  },
});

const shared = mongoose.model("shared", sharedSchema);
module.exports = shared;
