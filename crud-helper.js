// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
// const Item = require('./models/item');
// const Category = require('./models/category');
// const Order = require('./models/order');

async function main() {
  const user = await User.create({
    name: 'billy',
    email: 'goat@shack.com',
    password: 'baba'
  });
  console.log(user);
}

main();