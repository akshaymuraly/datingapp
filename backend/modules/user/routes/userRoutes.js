const express = require("express");
const router = express.Router();
const {
  UserSignup,
  UserLogin,
  cookieValidation,
} = require("../controllers/userControllers");

router.post("/signup", UserSignup);
router.post("/login", UserLogin);
router.get("/profile", cookieValidation);

module.exports = router;
