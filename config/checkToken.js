const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  // check for the token being sent in a header or as a query parameter
  let token = req.get('Authorization') || req.query.token;
  if (token) {
    // remove 'Bearer if it was inlcuded in token header
    token = token.replace('Bearer ', '');
    // check if token is valid and not expired
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      // if valid token, decoded will be the token's entire payload
      // if invalid, err will be sent
      req.user = err ? null : decoded.user;
      return next();
    });
  } else {
    // no token was sent
    req.user = null;
    return next();
  }
}