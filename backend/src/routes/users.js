const express = require("express");
const jwt = require("jsonwebtoken");
const Users = require("../models/Users.js");

const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  // check if user already exists
  const userExists = await Users.findOne({ email: email });

  if (userExists) {
    res.status(409).json({ message: "User already exists" });
  } else {
    const newUser = new Users({
      name: name,
      email: email,
      password: password,
    });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    res.json({ message: "User registered successfully", authToken: token });
  }
});


userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await Users.findOne({ email: email });

  if (user) {
    if (user.password === password) {
      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      res.json({ message: "User registered successfully", authToken: token });
    } else {
      res.status(403).json({ message: "Invalid password" });
    }
  } else {
    res.status(403).json({ message: "Invalid credentials" });
  }
});

module.exports = userRouter;