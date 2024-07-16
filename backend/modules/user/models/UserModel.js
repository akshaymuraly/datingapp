const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Location: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  Profile: {
    type: String,
    required: true,
  },
  Smocking: {
    type: String,
    required: true,
    enum: ["Yes", "No", "Occassionally"],
  },
  Hobbies: {
    type: [String],
  },
  Interests: {
    type: [String],
  },
  Address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("user_detail", userSchema);
