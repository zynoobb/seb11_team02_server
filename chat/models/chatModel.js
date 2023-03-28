const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema(
  {
    chatMembers: {
      type: Array,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
);

module.exports = mongoose.model("Chat", ChatSchema);

