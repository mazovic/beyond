const express = require("express");
const sendEmailController = require("./sendEmailController");
const router = express.Router();
//send email
router.post("/contact-us", sendEmailController.createMessage);

module.exports = router;
