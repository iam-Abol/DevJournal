const express = require("express");
const router = express.Router();
const { Journal } = require("../modals/journal");
const User = require("../modals/User");
const authMiddleware = require("./middlewares/authMiddleware");
const mongoose = require("mongoose");
const journalController = require("../controllers/journal");
router.get("/", authMiddleware, journalController.getJournals);
router.get("/:journalId", authMiddleware, journalController.getJournalById);
router.post("/", authMiddleware, journalController.postJournals);
router.post("/:journalId/saved", authMiddleware, journalController.postSaved);

router.get("/saved", authMiddleware, async (req, res, next) => {
  const userId = req.userId;
  try {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res
        .status(401)
        .json({ message: "Invalid user ID not authenticated" });
    }
    const user = await User.findById(userId).populate("saved").lean();
    if (!user)
      return res
        .status(404)
        .json({ message: "User not found or not authenticated" });

    res.status(200).json(user.saved || []);
  } catch (error) {
    console.error("Error fetching saved journals:", error);

    res.status(500).json({ message: "Failed to load saved journals" });
  }
});
module.exports = router;
