const express = require('express');
const router = express.Router();
const productsCtrl = require('../../controllers/api/products');

// GET /api/products
router.get('/', productsCtrl.index);

module.exports = router;