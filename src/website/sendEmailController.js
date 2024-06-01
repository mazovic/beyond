const contactUs = require("../admin/models/contactUsModel");
exports.createMessage = async (req, res, next) => {
  const {
    name,
    email,
    phoneNumber,
    requestType,
    HowDidYouHearAboutUs,
    jobTitle,
    institution,
    bestTime,
  } = req.body;
  if (!name || !email || !phoneNumber) {
    res.status(400).json({
      status: "fail",
      message: "name, email, phone number are required",
    });
  }
  try {
    await contactUs.create({
      name,
      email,
      phoneNumber,
      requestType,
      HowDidYouHearAboutUs,
      jobTitle,
      institution,
      bestTime,
    });
    res
      .status(201)
      .json({ status: "success", message: "Request has sent successfully" });
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ status: "fail", message: "Error Reqesting a message" });
  }
};
