const mongoose = require("mongoose");
const { JournalSchema } = require("./journal");
const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    journals: [{ type: mongoose.Schema.Types.ObjectId, ref: "Journal" }],
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);
