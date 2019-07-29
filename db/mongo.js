const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const MONGO_URL =
  "mongodb+srv://saroj:saroj#1995@cluster0-azzky.mongodb.net/test?retryWrites=true&w=majority";

mongoose.Promise = global.Promise;
mongoose
  // .connect(
  //   "mongodb+srv://saroj:saroj#1995@cluster0-azzky.mongodb.net/customer?retryWrites=true&w=majority",
  //   { useNewUrlParser: true }
  // )

  /**Local URL */
  // .connect("mongodb://localhost:27017/Todos", { useNewUrlParser: true })

  /**Customer database */
  .connect(`${process.env.MONGO_URL}${process.env.DB_NAME}`, {
    useNewUrlParser: true
  })

  .then(() => console.log("Connected to MongoDB"))
  .catch(error => console.log(error));

module.exports = {
  mongoose
};
