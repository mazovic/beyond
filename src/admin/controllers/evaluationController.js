const evaluationModel = require("./../models/evaluationModel");
exports.getEvaluation = async (req, res) => {
  try {
    const evaluation = await evaluationModel.findOne();
    if (!evaluation) {
      return res.status(404).json({ error: "evaluation not found" });
    }
    res.status(200).json({ status: "success", data: { evaluation } });
  } catch (err) {
    res.status(400).json({ status: "fail", message: "Error getting stat" });
  }
};

exports.updateEvaluation = async (req, res) => {
  try {
    const { ...body } = req.body;
    const updatedEvaluation = await evaluationModel.findOneAndUpdate(
      {},
      { ...body },
      { new: true }
    );
    if (!updatedEvaluation) {
      return res.status(404).json({ error: "evaluation not found" });
    }
    res.status(200).json({
      status: "success",
      data: { updatedEvaluation },
    });
  } catch (err) {
    res
      .status(400)
      .json({ status: "fail", message: "Error updating evaluation" });
  }
};
