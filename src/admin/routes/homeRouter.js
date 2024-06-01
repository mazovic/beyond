const express = require("express");
const homeController = require("../controllers/homeController");
const statisticController = require("../controllers/statisticController.js");
const testimonialsController = require("../controllers/testimonialsController.js");
const authController = require("../controllers/authController.js");
const router = express.Router();
router.get("/", homeController.getHome);
router.put("/", authController.protect, homeController.updateHomePage);

router.get("/statistic/:id", statisticController.getStatistic);
router.patch("/statistic/:id", statisticController.updateStatistic);

router.get("/testimonials/:id", testimonialsController.getTestimonials);
router.patch("/testimonials/:id", testimonialsController.updateTestimonials);
module.exports = router;
