const Order = require('../../models/order');

module.exports = {
  purchaseOrder,
  addToOrder,
  submit,
  index,
  removeOrder
}

async function purchaseOrder(req, res) {
  const purchaseOrder = await Order.getPurchaseOrder(req.user._id);
  res.json(purchaseOrder);
}

async function addToOrder(req, res) {
  let purchaseOrder = await Order.getPurchaseOrder(req.user._id)
  purchaseOrder = await purchaseOrder.populate('lineItems.product').execPopulate();
  await purchaseOrder.addProductToOrder(req.params.productId);
  res.json(purchaseOrder); 
}

async function submit(req, res) {
  const purchaseOrder = await Order.getPurchaseOrder(req.user._id);
  const submitData = await purchaseOrder.submitOrder(req.body);
  res.json(submitData);
}

async function index(req, res) {
  const orders = await Order.find({ isSubmitted: true }).sort({ updatedAt: 'desc' }).exec();
  res.json(orders);
}

async function removeOrder(req, res) {
  await Order.findOneAndDelete(
    { _id: req.params.id }, 
    (err, removedOrder) => removedOrder && err
  );
  const updatedOrders = await Order.find({ isSubmitted: true }).sort({ updatedAt: 'desc' }).exec();
  res.json(updatedOrders);
}