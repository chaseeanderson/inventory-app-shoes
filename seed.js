require('dotenv').config();
require('./config/database');

const Product = require('./models/product');
const randomNum = Math.floor(Math.random() * 100);


(async function() {

  await Product.deleteMany({});
  const products = await Product.create([
    { name: '\'07', category: 'Air Jordan 1', variation: {variationTitle: '7.5'}, quantity: Math.floor(Math.random() * 100) },
    { name: '\'07', category: 'Air Force 1', variation: {variationTitle: '8'}, quantity: Math.floor(Math.random() * 100) },
    { name: '\'07', category: 'Air Force 1', variation: {variationTitle: '8.5'}, quantity: Math.floor(Math.random() * 100) },
    { name: '\'07', category: 'Air Force 1', variation: {variationTitle: '9'}, quantity: Math.floor(Math.random() * 100) },
    { name: '\'07', category: 'Air Force 1', variation: {variationTitle: '9.5'}, quantity: Math.floor(Math.random() * 100) },
    { name: '\'07', category: 'Air Force 1', variation: {variationTitle: '10'}, quantity: Math.floor(Math.random() * 100) },
    { name: '\'07', category: 'Air Force 1', variation: {variationTitle: '10.5'}, quantity: Math.floor(Math.random() * 100) },
    { name: '\'07', category: 'Air Force 1', variation: {variationTitle: '11'}, quantity: Math.floor(Math.random() * 100) },
    { name: '\'07', category: 'Air Force 1', variation: {variationTitle: '11.5'}, quantity: Math.floor(Math.random() * 100) },
    { name: '\'07', category: 'Air Force 1', variation: {variationTitle: '12'}, quantity: Math.floor(Math.random() * 100) },
    { name: '\'07 AN20', category: 'Air Force 1', variation: {variationTitle: '7.5'}, quantity: Math.floor(Math.random() * 100) },
    { name: '\'07 AN20', category: 'Air Force 1', variation: {variationTitle: '8'}, quantity: Math.floor(Math.random() * 100) },
    { name: '\'07 AN20', category: 'Air Force 1', variation: {variationTitle: '8.5'}, quantity: Math.floor(Math.random() * 100) },
    { name: '\'07 AN20', category: 'Air Force 1', variation: {variationTitle: '9'}, quantity: Math.floor(Math.random() * 100) },
    { name: '\'07 AN20', category: 'Air Force 1', variation: {variationTitle: '9.5'}, quantity: Math.floor(Math.random() * 100) },
    { name: '\'07 AN20', category: 'Air Force 1', variation: {variationTitle: '10'}, quantity: Math.floor(Math.random() * 100) },
    { name: '\'07 AN20', category: 'Air Force 1', variation: {variationTitle: '10.5'}, quantity: Math.floor(Math.random() * 100) },
    { name: '\'07 AN20', category: 'Air Force 1', variation: {variationTitle: '11'}, quantity: Math.floor(Math.random() * 100) },
    { name: '\'07 AN20', category: 'Air Force 1', variation: {variationTitle: '11.5'}, quantity: Math.floor(Math.random() * 100) },
    { name: '\'07 AN20', category: 'Air Force 1', variation: {variationTitle: '12'}, quantity: Math.floor(Math.random() * 100) },
    { name: 'LOW', category: 'Air Jordan 1', variation: {variationTitle: '7.5'}, quantity: Math.floor(Math.random() * 100) },
    { name: 'LOW', category: 'Air Jordan 1', variation: {variationTitle: '8'}, quantity: Math.floor(Math.random() * 100) },
    { name: 'LOW', category: 'Air Jordan 1', variation: {variationTitle: '8.5'}, quantity: Math.floor(Math.random() * 100) },
    { name: 'LOW', category: 'Air Jordan 1', variation: {variationTitle: '9'}, quantity: Math.floor(Math.random() * 100) },
    { name: 'LOW', category: 'Air Jordan 1', variation: {variationTitle: '9.5'}, quantity: Math.floor(Math.random() * 100) },
    { name: 'LOW', category: 'Air Jordan 1', variation: {variationTitle: '10'}, quantity: Math.floor(Math.random() * 100) },
    { name: 'LOW', category: 'Air Jordan 1', variation: {variationTitle: '10.5'}, quantity: Math.floor(Math.random() * 100) },
    { name: 'LOW', category: 'Air Jordan 1', variation: {variationTitle: '11'}, quantity: Math.floor(Math.random() * 100) },
    { name: 'LOW', category: 'Air Jordan 1', variation: {variationTitle: '11.5'}, quantity: Math.floor(Math.random() * 100) },
    { name: 'LOW', category: 'Air Jordan 1', variation: {variationTitle: '12'}, quantity: Math.floor(Math.random() * 100) },
  ]);

  console.log(products);
  process.exit();

})();

