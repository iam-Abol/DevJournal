const express = require("express");

const app = express();
const mongoose = require("mongoose");
const journalRoutes = require("./Routes/journal");
const authRoutes = require("./Routes/auth");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Unsupported file type"), false);
  }
};
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(
  multer({
    storage,
    fileFilter,
    limits: {
      fileSize: 1024 * 1024 * 5,
    },
  }).single("image")
);
app.use(cookieParser());
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/journals", journalRoutes);
app.use("/api/auth", authRoutes);
mongoose.connect("mongodb://127.0.0.1:27017/devJournal").then(() => {
  console.log("connected to database");

  app.listen(3000, () => {
    console.log("listening on 3000");
  });
});
