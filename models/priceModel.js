const mongoose = require("mongoose");

const priceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Price = new mongoose.model("Price", priceSchema);

module.exports = Price;