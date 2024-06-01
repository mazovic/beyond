const express = require("express");
const contactusController = require("../controllers/contactUsController.js");
const authController = require("../controllers/authController.js");
const router = express.Router();

//Get All Messages
router.get(
  "/messages",
  authController.protect,
  contactusController.getMessages
);
//Get Specific Message by ID
router.get(
  "/messages/:id",
  authController.protect,
  contactusController.getMessage
);

//mark it as seen
router.patch(
  "/messages/:id/seen",
  authController.protect,
  contactusController.markSeen
);

//Delete one message by ID
router.delete(
  "/messages/:id",
  authController.protect,
  contactusController.deleteMessage
);
module.exports = router;
