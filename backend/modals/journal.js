const mongoose = require("mongoose");
const JournalSchema = new mongoose.Schema({
  title: { type: String, require: true },
  content: String,
  createdAt: {
    type: String,
    default: () => new Date().toLocaleString(),
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
module.exports.JournalSchema = JournalSchema;
module.exports.Journal = mongoose.model("Journal", JournalSchema);
