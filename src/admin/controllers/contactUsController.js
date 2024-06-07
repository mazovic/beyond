const contactUs = require("../models/contactUsModel");
//Get all messages
exports.getMessages = async (req, res) => {
  try {
    const messages = await contactUs.find().sort({ createdAt: -1 });
    res.status(200).json({
      status: "success",
      data: {
        messages,
      },
    });
  } catch (err) {
    res.status(400).json({ status: "fail", message: "Error getting messages" });
  }
};

exports.getMessage = async (req, res) => {
  const { id } = req.params;
  try {
    const message = await contactUs.findById(id);
    if (!message) {
      return res.status(404).send("Message not found");
    }
    res.status(200).json({
      status: "success",
      data: {
        message,
      },
    });
  } catch (err) {
    res.status(400).send("Error retrieving message");
  }
};

exports.deleteMessage = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedMessage = await contactUs.findByIdAndDelete(id);
    if (!deletedMessage) {
      return res.status(404).send("Message not found");
    }
    res.status(200).json({ message: "Message deleted successfully" });
  } catch (err) {
    res.status(400).send("Error deleting message");
  }
};
exports.markSeen = async (req, res) => {
  const { id } = req.params;
  try {
    const message = await contactUs.findById(id);

    if (!message) {
      return res.status(404).send("Message not found");
    }

    const updatedMessage = await contactUs.findByIdAndUpdate(
      id,
      { IsSeen: !message.IsSeen },
      { new: true }
    );

    // Send the updated message as the response
    res.json(updatedMessage);
  } catch (err) {
    res.status(500).send("Error marking message as seen");
  }
};
