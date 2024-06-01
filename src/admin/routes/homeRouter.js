const express = require("express");
const homeController = require("../controllers/homeController");
const statisticController = require("../controllers/statisticController.js");
const testimonialsController = require("../controllers/testimonialsController.js");
const authController = require("../controllers/authController.js");
const router = express.Router();
router.get("/", homeController.getHome);
router.put("/", authController.protect, homeController.updateHomePage);

router.get("/statistic/:id", statisticController.getStatistic);
router.patch(
  "/statistic/:id",
  authController.protect,
  statisticController.updateStatistic
);
router.get("/statistic", statisticController.getAllStatistic);

router.get("/testimonials/:id", testimonialsController.getTestimonials);
router.get("/testimonials", testimonialsController.getAllTestimonials);
router.patch(
  "/testimonials/:id",
  authController.protect,
  testimonialsController.updateTestimonials
);
module.exports = router;
