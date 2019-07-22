const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/Todos",
  { useNewUrlParser: true },
  () => {
    console.log("connected to Todos APP");
  }
);

/**
 * Define a Todos model
 */
const Todos = mongoose.model("Todos", {
  text: String,
  completeAt: { type: Boolean, default: false },
  createAt: { type: Date, default: Date.now }
});

const app = express();

/**
 * set body parser as json and url encoded as true
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ msg: "It works " });
});

/**
 * Create a todos
 */

const todo = new Todos({
  text: "Walk with dog"
});

todo
  .save()
  .then(doc => console.log(doc))
  .catch(error => console.log(error));

/**
 * Assign environment variable or default port is 5000
 */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on post ${PORT}`));
