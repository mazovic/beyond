const express = require("express");
const sharedController = require("../controllers/sharedController.js");
const authController = require("../controllers/authController.js");
const router = express.Router();
router.get("/", sharedController.getShared);
router.patch("/", authController.protect, sharedController.updateShared);
module.exports = router;
