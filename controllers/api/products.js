const Product = require('../../models/product');

module.exports = {
  index,
  updateQty
}

async function index(req, res) {
  const products = await Product.find({}).sort('category').exec();
  res.json(products);
}

async function updateQty(req, res) {
  console.log('update ', req.params.id)
}