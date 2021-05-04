const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
  create,
  logIn,
  checkToken
};

function checkToken(req, res) {
  // req.user will always be there IF a valid token was sent
  // in the fetch req
  console.log(req.user);
  res.json(req.exp);
}

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user);
    // yes, we can send back a simple string
    res.json(token)
  } catch(err) {
    // client will check for a non-200 status
    // 400 = bad request
    res.status(400).json(err);
  }
}

async function logIn(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.json(createJWT(user));
  } catch(err) {
    res.status(400).json(err);
  }
}

/* Helper Functions */

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}