const mongoose = require('mongoose');
const Schema = mongoose.Types.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  category: String,
  variation: [{
    upc: String,
    variationTitle: String
  }],
  quantity: Number
}, {
  timestamps: true
});

module.exports = productSchema;