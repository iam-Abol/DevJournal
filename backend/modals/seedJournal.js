const mongoose = require("mongoose");
const Journal = require("./journal");
async function seed() {
  await mongoose.connect("mongodb://127.0.0.1:27017/devJournal");
  await Journal.deleteMany();

  await Journal.insertMany([
    {
      title: "My First Journal",
      content: "Today I started working on my journal app.",
    },
    {
      title: "Todo React",
      content: "Finish the auth in react",
    },
    {
      title: "My Third Journal",
      content: "Today I started working on my journal app.",
    },
    {
      title: "Todo React",
      content: "Finish the auth in react",
    },
    {
      title: "My 4th Journal",
      content: "Today I started working on my journal app.",
    },
    {
      title: "Todo React",
      content: "Finish the auth in react",
    },
  ]);
  mongoose.disconnect();
}
seed();
