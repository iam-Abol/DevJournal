const express = require("express");
const router = express.Router();
const Journal = require("../modals/journal");
router.get("/", async (req, res, next) => {
  try {
    const journals = await Journal.find().sort({ createdAt: -1 });
    res.status(200).json(journals);
  } catch (error) {
    console.error("Error fetching journals:", error);

    res.status(500).json({ message: "Failed to load journals" });
  }
});
module.exports = router;
