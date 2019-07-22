const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/Todos", { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(error => console.log(error));

module.exports = {
  mongoose
};
