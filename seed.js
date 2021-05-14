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
    { 
      name: '\'92', 
      category: 'Air Jordan Zoom', 
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
      name: 'RETRO', 
      category: 'Air Jordan 5', 
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
      name: 'TD', 
      category: 'Air Jordan 5', 
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
      name: 'RETRO (GS)', 
      category: 'Air Jordan 8', 
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
      name: 'RUN FK', 
      category: 'Joyride', 
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
      name: 'SL (GS)', 
      category: 'Cortez Basic', 
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
      name: 'LEATHER', 
      category: 'Cortez Basic', 
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
      name: '90', 
      category: 'Air Max', 
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
      name: 'PRO (GS)', 
      category: 'Jordan Jumpman', 
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
      name: 'RETRO HIGH 0', 
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
    { 
      name: 'XIV (GS)', 
      category: 'Lebron Soldier', 
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
      name: 'CRIB BOOTIE', 
      category: 'Jordan 1', 
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

