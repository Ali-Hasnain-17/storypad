const express = require("express");
const storyController = require("../controllers/storyController");
const router = express.Router();

router.get("/", storyController.getAllStories);
router.get("/:id", storyController.getStoryById);
router.post("/", storyController.createStory);
router.patch("/:id", storyController.updateStory);
router.patch("/:id/like", storyController.likeStory);
router.patch("/:id/unlike", storyController.unlikeStory);
router.delete("/:id", storyController.deleteStory);

module.exports = router;
