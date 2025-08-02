const express = require("express");
const router = express.Router();
const { Journal } = require("../modals/journal");
const User = require("../modals/User");
const authMiddleware = require("./middlewares/authMiddleware");
router.get("/", authMiddleware, async (req, res, next) => {
  try {
    const user = await User.findById(req.userId).populate("journals");
    console.log(user);

    const journals = user.journals;
    res.status(200).json(journals);
  } catch (error) {
    console.error("Error fetching journals:", error);

    res.status(500).json({ message: "Failed to load journals" });
  }
});
router.post("/", authMiddleware, async (req, res, next) => {
  const { title, content } = req.body;
  try {
    const newJournal = await Journal.create({
      title,
      content,
    });
    res.status(201).json(newJournal);
  } catch (error) {
    console.error("Error adding to journals:", error);

    res.status(500).json({ message: "Failed to add a journal" });
  }
});
module.exports = router;
