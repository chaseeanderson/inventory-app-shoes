import Order from '../../models/order';

module.exports = {
  purchaseOrder
}

async function purchaseOrder(req, res) {
  const purchaseOrder = await Order.getPurchaseOrder(req.user._id);
  res.json(purchaseOrder);
}