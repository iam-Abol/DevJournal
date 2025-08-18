const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../modals/User");
const jwt = require("jsonwebtoken");
const authMiddleware = require("./middlewares/authMiddleware");
const authController = require("../controllers/auth");
const { body } = require("express-validator");
router.post(
  "/signup",
  [
    body("password")
      .trim()
      .isLength({ min: 6 })
      .withMessage("password should be atleast 6 character"),
    body("email").isEmail().withMessage("invalid email address"),
  ],
  authController.postSignUp
);
router.post("/login", authController.postLogin);
router.get("/isLoggedIn", authMiddleware, authController.getIsLoggedIn);
router.post("/logout", authMiddleware, authController.postLogOut);
module.exports = router;
