const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Create customer schema
 */
const customerSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  phone: { type: String, require: true },
  create_at: { type: Date, default: Date.now }
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = {
  Customer
};
