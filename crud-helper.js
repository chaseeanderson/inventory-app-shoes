// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Product = require('./models/product');
const Order = require('./models/order');

// async function main() {
//   const user = await User.create({
//     name: 'billy',
//     email: 'goat@shack.com',
//     password: 'baba'
//   });
//   console.log(user);
// }

// main();

let productsCrud = (async function productsIndex() {
  const products = await Product.find({});
  console.log(products)
})();

// Local Vars
let u, p, o;
