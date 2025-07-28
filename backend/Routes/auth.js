const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../modals/User");
router.post("/signup", async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already taken" });
    }
    const hashed = await bcrypt.hash(password, 12);
    await User.create({ username, password: hashed });
    res.status(201).json({ message: "user created successfully" });
  } catch (error) {
    console.log("sign up error");

    res.status(500).json({ message: "failed to craete user" });
  }
});
module.exports = router;
