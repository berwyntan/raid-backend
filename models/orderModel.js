const mongoose = require("mongoose");

const singleOrder = new mongoose.Schema({
    fruit: {
        type: String,
    },
    qty: {
        type: Number,
    },
    unitPrice: {
        type: Number,
    },
    subtotal: {
        type: Number,
    }
})

const orderSchema = new mongoose.Schema({
  orderInfo: [singleOrder],
  total: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Order = new mongoose.model("Order", orderSchema);

module.exports = Order;