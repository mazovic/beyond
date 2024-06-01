const mongoose = require("mongoose");
const sharedSchema = new mongoose.Schema({
  socialIcons: {
    type: String,
  },
  constactInfo: {
    phone: String,
    email: String,
    address: String,
    icon: [String],
  },

  paragraph: {
    type: String,
    required: true,
    trim: true,
  },
});

const shared = mongoose.model("shared", sharedSchema);
module.exports = shared;
