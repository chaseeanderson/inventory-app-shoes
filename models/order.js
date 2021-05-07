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
  isPaid: { type: Boolean, default: false },
  lineItems: [productSchema],
  commission: Number,
  user: { type: Schema.Types.ObjectId, ref: 'User' }
},{
  timestamps: true
});

orderSchema.virtual('orderTotal').get(function() {
  let total = this.lineItems.reduce((total, item) => item.price + total, 0);
  return total += (total * this.commission)  
});

