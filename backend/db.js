const mongoose = require("mongoose");

mongoose.connect("mongodb://mongo:27017/users");

const User = mongoose.model("User", {
name: String,
email: String
});

module.exports = User;