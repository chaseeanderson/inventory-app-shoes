require('dotenv').config();
require('./config/database');

const Product = require('./models/product');
const Order = require('./models/order');
const randomNum = Math.floor(Math.random() * 100);


(async function() {

  await Order.deleteMany({});

  await Product.deleteMany({});
  const products = await Product.create([
    { 
      name: '\'07', 
      category: 'Air Force 1', 
      variation: [
        {variationTitle: '7.5'},
        {variationTitle: '8'},
        {variationTitle: '8.5'},
        {variationTitle: '9'},
        {variationTitle: '9.5'},
        {variationTitle: '10'},
        {variationTitle: '10.5'},
        {variationTitle: '11'},
        {variationTitle: '11.5'},
        {variationTitle: '12'}
      ], 
        quantity: 0
    },
    { 
      name: '\'07 AN20', 
      category: 'Air Force 1', 
      variation: [
        {variationTitle: '7.5'},
        {variationTitle: '8'},
        {variationTitle: '8.5'},
        {variationTitle: '9'},
        {variationTitle: '9.5'},
        {variationTitle: '10'},
        {variationTitle: '10.5'},
        {variationTitle: '11'},
        {variationTitle: '11.5'},
        {variationTitle: '12'}
      ], 
        quantity: 0
    },
    { 
      name: 'LOW', 
      category: 'Air Jordan 1', 
      variation: [
        {variationTitle: '7.5'},
        {variationTitle: '8'},
        {variationTitle: '8.5'},
        {variationTitle: '9'},
        {variationTitle: '9.5'},
        {variationTitle: '10'},
        {variationTitle: '10.5'},
        {variationTitle: '11'},
        {variationTitle: '11.5'},
        {variationTitle: '12'}
      ], 
        quantity: 0
    },
  ]);

  console.log(products);
  process.exit();

})();

