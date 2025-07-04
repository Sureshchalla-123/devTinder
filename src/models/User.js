const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  phone: Number,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
