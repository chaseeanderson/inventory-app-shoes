const Order = require('../../models/order');

module.exports = {
  purchaseOrder,
  addToOrder,
  submit,
  index
}

async function purchaseOrder(req, res) {
  const purchaseOrder = await Order.getPurchaseOrder(req.user._id);
  res.json(purchaseOrder);
}

async function addToOrder(req, res) {
  let purchaseOrder = await Order.getPurchaseOrder(req.user._id)
  purchaseOrder = await purchaseOrder.populate('lineItems.product').execPopulate();
  console.log('hizzle', purchaseOrder)
  await purchaseOrder.addProductToOrder(req.params.productId);
  res.json(purchaseOrder); 
}

async function submit(req, res) {
  console.log(req.body)
  const purchaseOrder = await Order.getPurchaseOrder(req.user._id);
  // await purchaseOrder.updateInventory(req.body);
  const submitData = await purchaseOrder.submitOrder(req.body);
  res.json(submitData);
}

async function index(req, res) {
  const orders = await Order.find({ isSubmitted: true });
  res.json(orders);
}