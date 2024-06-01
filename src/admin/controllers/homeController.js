const homemodel = require("../models/homeModel");
const Statistics = require("../models/statisticModel");
const Testimonials = require("./../models/testimonialsModel");

exports.getHome = async (req, res) => {
  try {
    const home = await homemodel.findOne();
    const statistics = await Statistics.find();
    const testimonials = await Testimonials.find();
    if (!home) {
      return res.status(404).json({ error: "Home not found" });
    }
    res.status(200).json({
      status: "success",
      data: {
        home: home,
        statistics: statistics,
        testimonials: testimonials,
      },
    });
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
