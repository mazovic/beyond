const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
dotenv.config();
const sendEmaliRoute = require("./website/sendEmaliRoute.js");
const aboutUsRouter = require("./admin/routes/aboutUsRouter.js");
const contactUsRouter = require("./admin/routes/contactUsRouter.js");
const ourServicesRouter = require("./admin/routes/ourServicesRouter.js");
const homeRouter = require("./admin/routes/homeRouter.js");
const userRouter = require("./admin/routes/userRouter.js");
// Start express app
const app = express();
// Define middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies
app.use("/", sendEmaliRoute);
app.use("/admin/about-us", aboutUsRouter);
app.use("/admin/contact-us", contactUsRouter);
app.use("/admin/services", ourServicesRouter);
app.use("/admin/home", homeRouter);
app.use("/admin", userRouter);
const DB = "mongodb://127.0.0.1:27017/Khabazeh";
mongoose.connect(DB).then(() => console.log("DB connection successful!"));

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
