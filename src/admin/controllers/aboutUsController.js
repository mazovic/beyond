const aboutUs = require("../models/aboutUsModel");

const handleServerErrorResponse = (res, err) => {
  return res.status(500).json({ err: "Internal server error" });
};
const handleSuccessResponse = (res, data) => {
  return res.status(200).json({ status: "success", data });
};
const handleErrorResponse = (res, err, selectRoute) => {
  return res.status(404).json({ err: `${selectRoute} not found ` });
};

exports.getAllAboutUsData = async (req, res) => {
  try {
    const aboutUsData = await aboutUs.findOne();
    if (!aboutUsData) {
      handleErrorResponse(res, err, selectedRoute);
    }
    handleSuccessResponse(res, aboutUsData);
  } catch (err) {
    handleServerErrorResponse(res, err);
  }
};

exports.getAboutUsData = async (req, res) => {
  try {
    const aboutUsData = await aboutUs.findOne();

    if (!aboutUsData) {
      return handleErrorResponse(res, null, "About Us");
    }
    handleSuccessResponse(res, aboutUsData);
  } catch (err) {
    handleServerErrorResponse(res, err);
  }
};

exports.updateAboutUsData = async (req, res) => {
  try {
    const { ...body } = req.body;
    const aboutUsDataUpdated = await aboutUs.findOneAndUpdate(
      {},
      { $set: { ...body } },
      { new: true }
    );
    if (!aboutUsDataUpdated) {
      return handleErrorResponse(
        res,
        new Error("About Us data not found"),
        "About Us"
      );
    }
    handleSuccessResponse(res, aboutUsDataUpdated);
  } catch (err) {
    console.log(err);
    handleServerErrorResponse(res, err);
  }
};

// exports.getObjectTemplete = async (req, res, selectedRoute) => {
//   try {
//     const aboutUsData = await aboutUs.findOne().select(selectedRoute);
//     if (!aboutUsData) {
//       handleErrorResponse(res, err, selectedRoute);
//     }
//     handleSuccessResponse(res, aboutUsData);
//   } catch (err) {
//     handleServerErrorResponse(res, err);
//   }
// };

// exports.updateObjectTemplete = async (req, res, selectedRoute) => {
//   if (selectedRoute === "title") {
//     const { title } = req.body;
//     try {
//       const aboutUsData = await aboutUs
//         .findOneAndUpdate({}, { title }, { new: true })
//         .select(selectedRoute);
//       if (!aboutUsData) {
//         handleErrorResponse(res, err, selectedRoute);
//       }
//       handleSuccessResponse(res, aboutUsData);
//     } catch (err) {
//       handleServerErrorResponse(res, err);
//     }
//   } else {
//     const { title, paragraph } = req.body;
//     try {
//       const aboutUsData = await aboutUs
//         .findOneAndUpdate(
//           {},
//           {
//             $set: {
//               [`${selectedRoute}.title`]: title,
//               [`${selectedRoute}.paragraph`]: paragraph,
//             },
//           },
//           { new: true }
//         )
//         .select(selectedRoute);
//       if (!aboutUsData) {
//         handleErrorResponse(res, err, selectedRoute);
//       }
//       handleSuccessResponse(res, aboutUsData);
//     } catch (err) {
//       handleServerErrorResponse(res, err);
//     }
//   }
// };

// //Get Title
// exports.getTitle = (req, res) => {
//   this.getObjectTemplete(req, res, "title");
// };
// //Update Title
// exports.updateTitle = (req, res) => {
//   this.updateObjectTemplete(req, res, "title");
// };

// //get company Bio
// exports.getCompanyBio = (req, res) => {
//   this.getobjectTemplete(req, res, "companyBio");
// };

// //update company Bio
// exports.updateCompanyBio = (req, res) => {
//   this.updateObjectTemplete(req, res, "companyBio");
// };

// //get what we do
// exports.getWhatWeDo = (req, res) => {
//   this.getObjectTemplete(req, res, "whatWeDo");
// };
// exports.updateWhatWeDo = (req, res) => {
//   this.updateObjectTemplete(req, res, "whatWeDo");
// };
// exports.getOurVision = (req, res) => {
//   this.getObjectTemplete(req, res, "ourVision");
// };
// exports.updateOurVision = (req, res) => {
//   this.updateObjectTemplete(req, res, "ourVision");
// };
// exports.getOurMission = (req, res) => {
//   this.getObjectTemplete(req, res, "ourMission");
// };
// exports.updateOurMission = (req, res) => {
//   this.updateObjectTemplete(req, res, "ourMission");
// };
// exports.getOurGoals = (req, res) => {
//   this.getObjectTemplete(req, res, "ourGoals");
// };
// exports.updateOurGoals = (req, res) => {
//   this.updateObjectTemplete(req, res, "ourGoals");
// };
// exports.getOurPromise = (req, res) => {
//   this.getObjectTemplete(req, res, "ourPromise");
// };
// exports.updateOurPromise = (req, res) => {
//   this.updateObjectTemplete(req, res, "ourPromise");
// };
