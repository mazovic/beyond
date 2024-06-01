const Services = require("../models/ourServicesModel");
exports.getAllServices = async (req, res) => {
  try {
    const services = await Services.find();
    if (!services) {
      return res.status(404).json({ error: "Services not found" });
    }
    res.status(200).json({
      status: "success",
      results: services.length,
      data: {
        services,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Unable to retrieve services" });
  }
};

exports.getOneService = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Services.findById(id);
    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }
    res.status(200).json({ status: "success", data: { service } });
  } catch (error) {
    res.status(500).json({ error: "Unable to retrieve the service" });
  }
};

// Update service with image upload
exports.updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, paragraph } = req.body;

    const updatedService = await Services.findByIdAndUpdate(
      id,
      { title, paragraph },
      { new: true }
    );
    if (!updatedService) {
      return res.status(404).json({ error: "Service not found" });
    }
    res
      .status(200)
      .json({ status: "success", data: { service: updatedService } });
  } catch (error) {
    console.error("Error updating service:", error);
    res.status(500).json({ error: "Unable to update the service" });
  }
};
