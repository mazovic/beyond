const statisticsModel = require("../models/statisticModel");
exports.getStatistic = async (req, res) => {
  try {
    const { id } = req.params;

    const stat = await statisticsModel.findById(id);
    if (!stat) {
      return res.status(404).json({ error: "Statistic not found" });
    }
    res.status(200).json({ status: "success", data: { stat } });
  } catch (err) {
    res.status(400).json({ status: "fail", message: "Error getting stat" });
  }
};
exports.getAllStatistic = async (req, res) => {
  try {
    const stat = await statisticsModel.find();
    if (!stat) {
      return res.status(404).json({ error: "Statistic not found" });
    }
    res.status(200).json({ status: "success", data: { stat } });
  } catch (err) {
    res.status(400).json({ status: "fail", message: "Error getting stat" });
  }
};

exports.updateStatistic = async (req, res) => {
  try {
    const { id } = req.params;
    const stat = await statisticsModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!stat) {
      return res.status(404).json({ error: "Statistic not found" });
    }
    res.status(200).json({ status: "success", data: { stat } });
  } catch (err) {
    res.status(400).json({ status: "fail", message: "Error getting stat" });
  }
};
