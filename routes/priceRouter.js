const express = require('express');
const router = express.Router();
const priceController = require('../controllers/priceController');

router.get('/seed', priceController.seedPrice);

router.get('/', priceController.getAllPrice);

module.exports = router