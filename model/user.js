const mongoose = require("mongoose");

const User = mongoose.model("User", {
  email: { type: String, require: true },
  password: { type: String, require: true },
  create_at: { type: Date, default: Date.now }
});

module.exports = {
  User
};
