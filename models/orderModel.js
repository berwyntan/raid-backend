const mongoose = require("mongoose");

const singleOrderSchema = new mongoose.Schema({
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
  orderInfo: [singleOrderSchema],
  total: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const singleOrder = new mongoose.model("singleOrder", singleOrderSchema);
const Order = new mongoose.model("Order", orderSchema);

module.exports = { Order, singleOrder };