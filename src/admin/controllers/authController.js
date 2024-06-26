const userModel = require("../models/userModel");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { promisify } = require('util')
//signing in Token
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};
//create token
const createToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide email and password!" });
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    createToken(user, 200, res);
  } catch (err) {
    res.status(500).json({ message: "server interval error" });
  }
};
exports.protect = async (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token!" });
  }
};

exports.WhoAmI = async (req, res) => {
  try {
    const id = req.userId;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "user is no longer exist" });
    }
    res.status(200).json({ status: "success", data: { user } });
  } catch (err) {
    res.status(500).json({ message: "server interval error" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(204).json({ status: "success" });
  } catch (err) {
    return res.status(404).json({ message: "something wrong" });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({ email, password });
    res.status(200).json({ status: "success", data: { user } });
  } catch (err) {
    return res.status(404).json({ message: "something wrong" });
  }
};
exports.getAllUsers = async (req, res) => {
  try {
    const Users = await userModel.find();
    if (!Users) {
      return res.status(404).json({ error: "There is no users" });
    }
    res.status(200).json({
      status: "success",
      results: Users.length,
      data: {
        Users,
      },
    });
  } catch (err) {
    return res.status(400).json({ error: "error getting users" });
  }
};
