const contactUs = require("../admin/models/contactUsModel");
const sendEmail = require("./../utils/email");
const sendMessage = require("./../utils/telegram");
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
    await contactUs.create(req.body);
    const chat_id = "176569603";
    const message = `${name} want to contact us and his email is ${email} about ${requestType} and he hear about us from ${HowDidYouHearAboutUs}`;
    await sendMessage(chat_id, message);
    // await sendEmail({
    //   sender: "name",
    //   email: "the email we want to send to",
    //   subject: requestType,
    //   message
    // });
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
