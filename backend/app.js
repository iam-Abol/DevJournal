const express = require("express");

const app = express();
const mongoose = require("mongoose");
const journalRoutes = require("./Routes/journal");
const authRoutes = require("./Routes/auth");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(multer({ storage }).single("image"));
app.use(cookieParser());
app.use("/api/journals", journalRoutes);
app.use("/api/auth", authRoutes);
mongoose.connect("mongodb://127.0.0.1:27017/devJournal").then(() => {
  console.log("connected to database");

  app.listen(3000, () => {
    console.log("listening on 3000");
  });
});
