const mongoose = require("mongoose");
const validator = require("validator");
const contactUsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      validate: [validator.isEmail, "Please enter a valid email"],
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    requestType: {
      type: String,
      enum: {
        values: [
          "Social_Media_Management",
          "Marketing_Strategy_Development",
          "Analytics_Evaluation",
          "Design_Production",
          "General_Question",
        ],
        message:
          "the valid values is Social_Media_Management, Marketing_Strategy_Development, Analytics_Evaluation,Design_Production, General_Question",
      },
      default: "General_Question",
    },
    HowDidYouHearAboutUs: {
      type: String,
      enum: {
        values: ["Social_Media", "Referrals", "Advertising"],
        message: "the valid values is Social_Media, Referrals, Advertising",
      },
    },
    bestTime: {
      type: String,
      enum: ["morning", "afternoon", "evening"],
    },
    jobTitle: String,
    institution: String,
    IsSeen: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const contectUs = mongoose.model("contectUs", contactUsSchema);
module.exports = contectUs;
