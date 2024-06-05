const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home.hbs");
});
router.get("/contact", (req, res) => {
  res.render("contact.hbs");
});
router.get("/about", (req, res) => {
  res.render("about.hbs");
});

module.exports = router;
