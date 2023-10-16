const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/', orderController.postOrder);

router.get('/', orderController.viewAllOrder);

module.exports = router