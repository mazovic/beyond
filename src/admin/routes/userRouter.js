const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();
router.post("/login", authController.login);
router.get("/me", authController.protect, authController.WhoAmI);
router.delete("/", authController.protect, authController.deleteUser);
router.post("/", authController.protect, authController.createUser);
module.exports = router;
