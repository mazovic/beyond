const express = require("express");
const projectController = require("../controllers/projectController.js");
const authController = require("../controllers/authController.js");
const router = express.Router();
router
  .route("/")
  .get(projectController.getAllProjects)
  .post(projectController.addNewProject);
router
  .route("/:id")
  .get(projectController.getProject)
  .patch(authController.protect, projectController.updateProject)
  .delete(authController.protect, projectController.deleteProject);
module.exports = router;
