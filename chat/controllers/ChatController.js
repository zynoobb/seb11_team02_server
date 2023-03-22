const ChatModel = require("../models/chatModel.js");

exports.createChatRoom = async (req, res) => {
  const newChat = new ChatModel({
    members: [req.body.senderId, req.body.receiverId],
  });
  try {
    const result = await newChat.save();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.userChats = async (req, res) => {
  try {
    const chat = await ChatModel.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).send(chat);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.findChat = async (req, res) => {
  try {
    const chat = await ChatModel.findOne({
      members: { $all: [req.params.firstId, req.params.secondId] },
    });
    res.status(200).send(chat);
  } catch (error) {
    res.status(500).send(error);
  }
};