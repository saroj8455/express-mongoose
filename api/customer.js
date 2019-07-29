const express = require("express");

const router = express.Router();

/**
Import customer model
 */
const { Customer } = require("../model/customer");

// Get all customer info
router.get("/", (req, res) => {
  Customer.find()
    .sort({ name: 1 })
    .select("_id name email phone create_at")
    .exec()
    .then(customer => {
      if (customer.length > 0) {
        res.status(200).json({
          status: true,
          customer
        });
      } else {
        res.status(404).json({
          status: false,
          customer: "No such customer found"
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        status: false,
        message: "Unable to get customer information"
      });
    });
});

module.exports = router;
