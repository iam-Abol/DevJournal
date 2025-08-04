const express = require("express");
const router = express.Router();
const { Journal } = require("../modals/journal");
const User = require("../modals/User");
const authMiddleware = require("./middlewares/authMiddleware");
router.get("/", authMiddleware, async (req, res, next) => {
  try {
    // const user = await User.findById(req.userId).populate({
    //   path: "journals",
    //   options: { sort: { createdAt: -1 } },
    // });
    // console.log(user);
    // console.log(journals);

    const journals = await Journal.find()
      .populate({ path: "user", select: "_id username" })
      .sort({ createAt: -1 });
    res.status(200).json(journals);
  } catch (error) {
    console.error("Error fetching journals:", error);

    res.status(500).json({ message: "Failed to load journals" });
  }
});
router.get("/:journalId", async (req, res, next) => {
  const { journalId } = req.params;
  // res.send(journalId);
  try {
    const journal = await Journal.findById(journalId);
    if (!journal) return res.status(404).json({ message: "journal not found" });
    const { _id, title, content } = journal;
    res.status(200).json({ _id, content, title });
  } catch (error) {
    console.error("Error fetching journal:", error);

    res.status(500).json({ message: "Failed to load journal " + journalId });
  }
});
router.post("/", authMiddleware, async (req, res, next) => {
  const { title, content } = req.body;
  console.log(req.file);

  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const newJournal = await Journal.create({
      title,
      content,
      user: user._id,
      image: "",
    });
    user.journals.push(newJournal._id);
    await user.save();
    res.status(201).json(newJournal);
  } catch (error) {
    console.error("Error adding to journals:", error);

    res.status(500).json({ message: "Failed to add a journal" });
  }
});
module.exports = router;
