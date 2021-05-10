const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

// GET to /api/orders/purchase-orders
router.get('/purchase-order', ordersCtrl.purchaseOrder);

module.exports = router;