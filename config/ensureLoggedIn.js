module.exports = function(req, res, next) {
  // status code of 401 is Unauthorized
  if (!req.user) return res.status(401).json('Unauthorized');
  // a okay
  next();
}