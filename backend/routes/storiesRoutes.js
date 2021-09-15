const express = require("express");
const storyController = require("../controllers/storyController");
const router = express.Router();

router.get("/", storyController.getAllStories);
router.get("/:id", storyController.getStoryById);
router.post("/", storyController.createStory);

module.exports = router;
