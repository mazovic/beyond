const express = require("express");
const projectController = require("../controllers/projectController.js");
const authController = require("../controllers/authController.js");
const router = express.Router();
router.get("/", projectController.getAllProjects);
router
  .route("/:id")
  .get(projectController.getProject)
  .patch(authController.protect, projectController.updateProject)
  .delete(authController.protect, projectController.deleteProject);
module.exports = router;
