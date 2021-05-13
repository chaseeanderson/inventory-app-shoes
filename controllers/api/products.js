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
  const product = await Product.findById(req.params.id)
  const newQty = parseInt(product.quantity) + parseInt(req.body.quantity)
  product.quantity = newQty;
  product.save();
  res.json(product);
}