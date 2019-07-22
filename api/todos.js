const express = require("express");

// Import Todos model and User model
const { Todos } = require("../model/todos");

const router = express.Router();

// Create todos
router.post("/", (req, res) => {
  var { text } = req.body;
  text = text.trim();
  if (!text || text == null) {
    return res.status(400).json({ msg: "Text field is not empty" });
  }
  const newTodos = new Todos({
    text
  });
  newTodos.save().then(
    todos => {
      res.status(201).json({ msg: "Todos save successfully", todos });
    },
    err => {
      res.status(404).json({ msg: "Unable to save todos" });
    }
  );
});

module.exports = router;
