const express = require('express');
const router = express.Router();
const productsCtrl = require('../../controllers/api/products');

// GET /api/products
router.get('/', productsCtrl.index);

// PUT /api/products
router.put('/:id', productsCtrl.updateQty);

module.exports = router;