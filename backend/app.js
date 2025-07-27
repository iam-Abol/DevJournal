const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/devJournal").then(() => {
  console.log("connected to database");

  app.listen(3000, () => {
    console.log("listening on 3000");
  });
});
