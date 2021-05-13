const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lineItemSchema = new Schema({
  quantity: { type: Number, default: 0 },
  product: { type: Schema.Types.ObjectId, ref: 'Product' },
  price: { type: Number, default: 0 }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

const orderSchema = new Schema({
  vendor: { type: String, default: '' },
  isSubmitted: { type: Boolean, default: false },
  isPaid: { type: Boolean, default: false },
  lineItems: [lineItemSchema],
  commission: { type: Number, default: 0 },
  user: { type: Schema.Types.ObjectId, ref: 'User' }
},{
  timestamps: true,
  toJSON: { virtuals: true }
});

orderSchema.virtual('orderTotal').get(function() {
  let total = this.lineItems.reduce((total, item) => item.price + total, 0);
  return total += (total * this.commission)  
});

orderSchema.statics.getPurchaseOrder = function(userId) {
  return this.findOneAndUpdate(
    { user: userId, isSubmitted: false },
    // create new order doc if one doesn't exist
    { user: userId },
    { upsert: true, new: true }
  )
};

orderSchema.methods.addProductToOrder = async function (productId) {
  // check to see if product is already in order
  const lineItem = this.lineItems.find(lineItem => lineItem.product._id.equals(productId));
  if (lineItem) {
    console.log('does this happen')
    return;
  } else {
    const product = await mongoose.model('Product').findById(productId);
    // console.log('product', product)
    this.lineItems.push({ product });
    // lineItem.product = product;
  }

  return this.save();
}

// orderSchema.methods.updateInventory = async function (data) {
//   this.populate('product').exec(function (err, order) {
//     console.log(err)
//   })
// }

orderSchema.methods.submitOrder = async function (data) {
  // const product = this.populate('product').exec(function(err, product) {
  //   if (err) console.log('error', err)
    this.vendor = data.vendor;
    this.lineItems = data.lineItems;
    // update the product qty
    this.lineItems.forEach((item, idx) => {
      const updatedQty = parseInt(item.product.quantity) + parseInt(data.lineItems[idx].quantity);
      item.product.quantity = 1;
    });
    this.commission = data.commission;
    this.isSubmitted = true;

  // })
  return this.save();
}

module.exports = mongoose.model('Order', orderSchema);