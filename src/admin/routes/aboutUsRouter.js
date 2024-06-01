const express = require("express");
const router = express.Router();
const aboutUsController = require("../controllers/aboutUsController");
const authController = require("../controllers/authController");

router.get("/", aboutUsController.getAboutUsData);
router.put("/", authController.protect, aboutUsController.updateAboutUsData);

module.exports = router;
