const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  category: String,
  variation: [{
    upc: String,
    variationTitle: String
  }],
  quantity: { type: Number }
}, {
  timestamps: true
});

module.exports = productSchema;