const express = require("express");
const router = express.Router();
const handler = require("../../controllers");
const asyncHandler = require("express-async-handler");
const { validateProject } = require("../../validators");

router.post("/", validateProject, asyncHandler(handler.project.newProject));

module.exports = router;
