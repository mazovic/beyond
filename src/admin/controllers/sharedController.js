const sharedModel = require("../models/sharedModel");

exports.getShared = async (req, res) => {
  try {
    const shared = await sharedModel.findOne();
    if (!shared) {
      return res.status(404).json({ error: "Shared not found" });
    }
    res.status(200).json({ status: "success", data: { shared } });
  } catch (err) {
    res.status(400).json({ status: "fail", message: "Error getting shared" });
  }
};

exports.updateShared = async (req, res) => {
  try {
    const shared = await sharedModel.findOneAndUpdate({}, req.body, {
      new: true,
      runValidators: true,
    });
    if (!shared) {
      return res.status(404).json({ error: "shared not found" });
    }
    res.status(200).json({ status: "success", data: { shared } });
  } catch (err) {
    res.status(400).json({ status: "fail", message: "Error getting shared" });
  }
};
