const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../modals/User");
router.post("/signup", async (req, res, next) => {
  const { email, username, password } = req.body;
  try {
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ message: "Username already taken" });
    }
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already taken" });
    }
    const hashed = await bcrypt.hash(password, 12);
    await User.create({ email, username, password: hashed });
    res.status(201).json({ message: "user created successfully" });
  } catch (error) {
    console.log("sign up error");

    res.status(500).json({ message: "failed to craete user" });
  }
});
router.post("/login", async (req, res, next) => {
  const { password, email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ error: "Invalid username or password" });

    res.status(200).json({
      message: "Login successful",
      username: user.username,
      userId: user._id,
    });
  } catch (error) {
    console.log("login error");

    res.status(500).json({ message: "failed to login user" + error.message });
  }
});
module.exports = router;
