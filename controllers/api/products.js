const Product = require('../../models/product');

module.exports = {
  index
}

async function index(req, res) {
  const products = await Product.find({}).sort('category').exec();
  res.json(products);
}