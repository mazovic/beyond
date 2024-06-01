const testimonialsModel = require("./../models/testimonialsModel");
exports.getTestimonials = async (req, res) => {
  try {
    const { id } = req.params;

    const testimonials = await testimonialsModel.findById(id);
    if (!testimonials) {
      return res.status(404).json({ error: "Statistic not found" });
    }
    res.status(200).json({ status: "success", data: { testimonials } });
  } catch (err) {
    res.status(400).json({ status: "fail", message: "Error getting stat" });
  }
};

exports.updateTestimonials = async (req, res) => {
  try {
    const { id } = req.params;
    const testimonials = await testimonialsController.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!testimonials) {
      return res.status(404).json({ error: "Statistic not found" });
    }
    res.status(200).json({ status: "success", data: { testimonials } });
  } catch (err) {
    res.status(400).json({ status: "fail", message: "Error getting stat" });
  }
};
