const mongoose = require("mongoose");

const storySchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  media: {
    type: String,
    required: true,
  },
  likes: {
    type: String,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Story", storySchema);
