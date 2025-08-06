const mongoose = require("mongoose");
const User = require("../modals/User");
const { Journal } = require("../modals/journal");

module.exports.getJournals = async (req, res, next) => {
  const userId = req.userId;
  try {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res
        .status(401)
        .json({ message: "Invalid user ID not authenticated" });
    }
    const user = await User.findById(userId);
    if (!user)
      return res
        .status(401)
        .json({ message: "User not found or not authenticated" });
    // const user = await User.findById(req.userId).populate({
    //   path: "journals",
    //   options: { sort: { createdAt: -1 } },
    // });
    // console.log(user);
    // console.log(journals);
    const savedSet = new Set(user.saved.map((id) => id.toString()));
    // console.log(savedSet);

    const journals = await Journal.find()
      .populate({ path: "user", select: "_id username" })
      .sort({ createAt: -1 })
      .lean();
    // console.log(journals);

    const journalsWithSaved = journals.map((journal) => {
      return { ...journal, isSaved: savedSet.has(journal._id.toString()) };
    });
    res.status(200).json(journalsWithSaved);
  } catch (error) {
    console.error("Error fetching journals:", error);

    res.status(500).json({ message: "Failed to load journals" });
  }
};
module.exports.getJournalById = async (req, res, next) => {
  const { journalId } = req.params;
  const userId = req.userId;
  console.log(journalId, "here we go");

  try {
    if (!mongoose.Types.ObjectId.isValid(journalId)) {
      return res.status(400).json({ message: "Invalid journal ID " });
    }
    const user = await User.findById(userId);
    if (!user)
      return res
        .status(401)
        .json({ message: "User not found or not authenticated" });

    const journal = await Journal.findById(journalId);
    if (!journal) return res.status(404).json({ message: "journal not found" });
    const journalWithIsSaved = {
      ...journal,
      isSaved: user.saved.some((id) => id.toString() === journalId),
    };
    res.status(200).json(journalWithIsSaved);
  } catch (error) {
    console.error("Error fetching journal:", error);

    res.status(500).json({ message: "Failed to load journal " + journalId });
  }
};
module.exports.postJournals = async (req, res, next) => {
  const { title, content } = req.body;
  // console.log(req.file);
  const image = req.file.path;
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const newJournal = await Journal.create({
      title,
      content,
      user: user._id,
      image,
    });
    user.journals.push(newJournal._id);
    await user.save();
    res.status(201).json(newJournal);
  } catch (error) {
    console.error("Error adding to journals:", error);

    res.status(500).json({ message: "Failed to add a journal" });
  }
};
module.exports.postSaved = async (req, res, next) => {
  let { journalId } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(journalId)) {
      return res.status(400).json({ message: "Invalid journal ID" });
    }
    const journal = await Journal.findById(journalId);
    if (!journal)
      return res.status(404).json({ message: "Journal not found :(" });
    const user = await User.findById(req.userId);
    if (!user)
      return res
        .status(401)
        .json({ message: "User not found or not authenticated" });

    // console.log(user.saved);
    // console.log(journalId);
    const foundJournalIndex = user.saved.findIndex(
      (id) => id.toString() === journalId
    );
    // console.log(foundJournalIndex);
    if (foundJournalIndex >= 0) {
      user.saved.splice(foundJournalIndex, 1);
      await user.save();
      return res.status(200).json({ message: "Journal is removed from saved" });
    }
    // if (user.saved.includes(journalId)) {

    //   user.saved.filter((id) => {
    //     console.log(id, " + ", journalId, id.toString() == journalId);

    //     return id.toString() !== journalId;
    //   });
    //   await user.save();
    //   console.log(user.saved);

    //   return res.status(200).json({ message: "Journal is removed from saved" });
    // }

    user.saved.push(journalId);
    await user.save();
    res.status(201).json({ message: "Journal added to saved successfully" });
  } catch (error) {
    console.error("Error adding  journal to saved", error);

    res.status(500).json({ message: "Failed to add journal to Saved" });
  }
};
module.exports.getSaved = async (req, res, next) => {
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
};
