const homeModel = require("../models/homeModel");
exports.getStatistic = async (req, res) => {
  try {
    const home = await homeModel.findOne();
    if (!home) {
      return res.status(404).json({ error: "Home not found" });
    }
    const statistic = home.statistic;
    res.status(200).json({ status: "success", data: { statistic } });
  } catch (err) {
    res.status(400).json({ status: "fail", message: "Error getting home" });
  }
};

exports.updateStatistic = async (req, res) => {
  try {
    const { ...body } = req.body;
    const home = await homeModel.findOneAndUpdate(
      {},
      { ...body },
      { new: true }
    );
    const statistic = home.statistic;
    res.status(200).json({ status: "success", data: { statistic } });
  } catch (err) {
    console.error(err);
    res.status(400).json({ status: "fail", message: "Error getting home" });
  }
};
