const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

// GET to /api/orders
router.get('/purchase-order', ordersCtrl.purchaseOrder);

// POST to /api/orders
router.post('/purchase-order/products/:productId', ordersCtrl.addToOrder);
router.post('/purchase-order/submit', ordersCtrl.submit)


module.exports = router;