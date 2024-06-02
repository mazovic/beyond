const contactUs = require("../admin/models/contactUsModel");
const sendEmail = require("./../utils/email");
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
    await sendEmail({
      sender: "name",
      email: "the email we want to send to",
      subject: requestType,
      message: `${name} want to contact us and his email is ${email} about ${requestType} and he hear about us from ${HowDidYouHearAboutUs}`,
    });
    res
      .status(201)
      .json({ status: "success", message: "Request has sent successfully" });
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ status: "fail", message: "email didn't sent successfully" });
  }
};
