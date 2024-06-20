const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  Name: String,
  Email: String,
  Password: String,
});

module.exports = mongoose.model("user_details", userSchema);
