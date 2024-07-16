const express = require("express");
const upload = require("multer")();
const router = express.Router();
const {
  UserSignup,
  UserLogin,
  cookieValidation,
  matchedProfiles,
  getUserProfile,
} = require("../controllers/userControllers");

router.post("/signup", upload.single("Profile"), UserSignup);
router.post("/login", UserLogin);
router.get("/profile", cookieValidation, getUserProfile);
router.get("/matched", cookieValidation, matchedProfiles);

module.exports = router;
