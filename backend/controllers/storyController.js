const mongoose = require("mongoose");
const Story = require("../models/Story");

async function createStory(req, res) {
  const { title, description, author, tags, media } = req.body;
  const story = new Story({ title, description, author, tags, media });
  try {
    await story.save();
    res.status(201).json({ message: "Post Created" });
  } catch (e) {
    res.status(409).json({ message: e.message });
  }
}

async function getAllStories(req, res) {
  try {
    const stories = await Story.find();
    res.json(stories);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
}

async function getStoryById(req, res) {
  const { id } = req.params.id;
  try {
    const story = await Story.findById(id);
    res.json(story);
  } catch (e) {
    res.status(400).json({ message: e.message });
    s;
  }
}

async function updateStory(req, res) {}

async function likeStory(req, res) {}

async function unlikeStory(req, res) {}

async function deleteStory(req, res) {}

module.exports = {
  createStory,
  getAllStories,
  getStoryById,
  updateStory,
  likeStory,
  unlikeStory,
  deleteStory,
};
