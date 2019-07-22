const mongoose = require("mongoose");

const Todos = mongoose.model("Todos", {
  text: String,
  completeAt: { type: Boolean, default: false },
  createAt: { type: Date, default: Date.now }
});

module.exports = {
  Todos
};
