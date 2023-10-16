const Price = require('../models/priceModel');
const priceSeed = require('../seedData/priceSeed')

const seedPrice = async (req, res) => {
    await Price.deleteMany({});
    const result = await Price.insertMany(priceSeed);
    try {
        if (result) return res.status(201).json(result)        
        else return res.status(400).json({ message: "Seed price error"})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    } 
}

const getAllPrice = async (req, res) => {
    const result = await Price.find({});
    console.log(result[0]._id)
    try {
        if (result) return res.status(200).json({result})
        else return res.status(400).json({ message: "Error: Get all price error"})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    } 
}

module.exports = { seedPrice, getAllPrice }