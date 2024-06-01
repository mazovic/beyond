const homemodel = require("../models/homeModel");

exports.getHome = async (req, res) => {
  try {
    const home = await homemodel.findOne();
    if (!home) {
      return res.status(404).json({ error: "Home not found" });
    }
    res.status(200).json({ status: "success", data: { home } });
  } catch (err) {
    res.status(400).json({ status: "fail", message: "Error getting home" });
  }
};
exports.updateHomePage = async (req, res) => {
  try {
    const { ...body } = req.body;
    const updatedHome = await homemodel.findOneAndUpdate(
      {},
      { ...body },
      { new: true }
    );
    if (!updatedHome) {
      return res.status(404).json({ error: "Home not found" });
    }
    res.status(200).json({
      status: "success",
      data: { updatedHome },
    });
  } catch (err) {
    res.status(400).json({ status: "fail", message: "Error updating home" });
  }
};
