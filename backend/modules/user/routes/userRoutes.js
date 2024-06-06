const express = require("express");
const { home, about, contact } = require("../controllers/userControllers");
const router = express.Router();

router.get("/", home);
router.get("/contact", contact);
router.get("/about", about);

module.exports = router;
