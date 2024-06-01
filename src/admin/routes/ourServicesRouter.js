const express = require("express");
const servicesController = require("../controllers/ourServicesController");
const authController = require("../controllers/authController.js");
const router = express.Router();

router.get("/", servicesController.getAllServices);

router.get("/:id", servicesController.getOneService);

router.patch("/:id", authController.protect, servicesController.updateService);

module.exports = router;
