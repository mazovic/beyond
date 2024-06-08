const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
dotenv.config();
const sendEmaliRoute = require("./website/sendEmaliRoute.js");
const aboutUsRouter = require("./admin/routes/aboutUsRouter.js");
const contactUsRouter = require("./admin/routes/contactUsRouter.js");
const ourServicesRouter = require("./admin/routes/ourServicesRouter.js");
const homeRouter = require("./admin/routes/homeRouter.js");
const userRouter = require("./admin/routes/userRouter.js");
const evaluationRouter = require("./admin/routes/evaluationRouter.js");
const projectRouter = require("./admin/routes/projectRouter.js");
const sharedRouter = require("./admin/routes/sharedRouter.js");
const uploadImage = require("./admin/controllers/fileUpload.js");
// Start express app
const app = express();
// Define middleware
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(express.json({limit: '50mb'}));
app.use(cors());
// Parse JSON bodies
app.use("/", sendEmaliRoute);
app.use("/admin/evaluation", evaluationRouter);
app.use("/admin/project", projectRouter);
app.use("/admin/shared", sharedRouter);
app.use("/admin/about-us", aboutUsRouter);
app.use("/admin/contact-us", contactUsRouter);
app.use("/admin/services", ourServicesRouter);
app.use("/admin/home", homeRouter);
app.use("/admin", userRouter);
app.post("/image-upload", function (req, res) {
  uploadImage(req, function (err, data) {
    if (err) {
      console.error(err);
      return res.status(404).end(JSON.stringify(err));
    }

    res.send(data);
  });
});

mongoose.connect((process.env.DB)).then(() => console.log("DB connection successful!"));

const filesDir = path.join(path.dirname(require.main.filename), "uploads");

if (!fs.existsSync(filesDir)) {
  fs.mkdirSync(filesDir);
}

const port = 8080;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
