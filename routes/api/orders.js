const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

// GET to /api/orders
router.get('/purchase-order', ordersCtrl.purchaseOrder);
router.get('/', ordersCtrl.index);

// POST to /api/orders
router.post('/purchase-order/products/:productId', ordersCtrl.addToOrder);
router.post('/purchase-order/submit', ordersCtrl.submit);

// DELETE to /api/orders
router.delete('/:id', ordersCtrl.removeOrder);

module.exports = router;