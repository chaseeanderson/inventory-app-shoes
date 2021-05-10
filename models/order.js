const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = require('./productSchema');

const lineItemSchema = new Schema({
  quantity: { type: Number, default: 0, required: true },
  product: productSchema,
  price: { type: Number, default: 0 }
}, {
  timestamps: true
});

const orderSchema = new Schema({
  vendor: { type: String, required: true },
  isSubmitted: { type: Boolean, default: false },
  isPaid: { type: Boolean, default: false },
  lineItems: [productSchema],
  commission: { type: Number, default: 0 },
  user: { type: Schema.Types.ObjectId, ref: 'User' }
},{
  timestamps: true
});

orderSchema.virtual('orderTotal').get(function() {
  let total = this.lineItems.reduce((total, item) => item.price + total, 0);
  return total += (total * this.commission)  
});

orderSchema.statics.getPurchaseOrder = function(userId) {
  return this.findOneAndUpdate(
    { user: userId, isSubmitted: false },
    { user: userId },
    { upsert: true, new: true }
  );
};

module.exports = mongoose.model('Order', orderSchema);