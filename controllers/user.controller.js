import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";

const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email.toLowerCase() });

  if (!user)
    return res.status(401).json({ message: "Tài khoản không tồn tại!" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res.status(401);
    throw new Error("Mật khẩu sai");
  }

  res.json({
    _id: user._id,
    email: user.email.toLowerCase(),
    username: user.username,
    isAdmin: user.isAdmin,
    token: generateToken(user._id),
  });
});

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  const userExits = await User.findOne({ email: email.toLowerCase() });

  if (userExits) {
    res.status(400);
    throw new Error("User đã tồn tại trước đó!");
  }

  const user = await User.create({
    username,
    email: email.toLowerCase(),
    password,
    isAdmin: req.body.isAdmin || false
  });

  if (!user) {
    res.status(400);
    throw new Error("Tạo user thất bại!");
  }

  res.status(201).json({
    _id: user._id,
    username: user.username,
    email: user.email,
    isAdmin: user.isAdmin,
    token: generateToken(user._id),
  });
});

export { userLogin, registerUser };
