const express = require("express");
const evaluationController = require("../controllers/evaluationController.js");
const authController = require("../controllers/authController.js");
const router = express.Router();

router.get("/", evaluationController.getEvaluation);
router.put("/", evaluationController.updateEvaluation);

module.exports = router;
