const Order = require('../../models/order');

module.exports = {
  purchaseOrder
}

async function purchaseOrder(req, res) {
  const purchaseOrder = await Order.getPurchaseOrder(req.user._id);
  console.log('test ', purchaseOrder)
  res.json(purchaseOrder);
}