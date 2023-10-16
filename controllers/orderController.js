const Order = require('../models/orderModel');

const postOrder = async (req, res) => {
    const { orderInfo } = req.body
    const result = await Order.create({
        orderInfo
      })      
      try {
        if (result) return res.status(201).json({ success: true, order: result});
        if (!result) return res.status(400).json({ message: "Error: order not created"})
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: `${error}`})   
      }
}

module.exports = { postOrder }