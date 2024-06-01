const express = require("express");
const homeController = require("../controllers/homeController");
const statisticController = require("../controllers/statisticController.js");
const authController = require("../controllers/authController.js");
const router = express.Router();
router.get("/", homeController.getHome);
router.put("/", authController.protect, homeController.updateHomePage);

router.get("/statistic", statisticController.getStatistic);
router.patch("/statistic", statisticController.updateStatistic);
module.exports = router;
