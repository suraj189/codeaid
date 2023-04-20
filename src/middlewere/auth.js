const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
console.log(process.env.SECRET)
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } 

  if (!token) {
     return res.status(401).json({ error: 'token missing' })
  }

  try {
    const decoded = jwt.verify(token, 'SkFabTZibXE1aE14ckpQUUxHc2dnQ2RzdlFRTTM2NFE2cGI4d3RQNjZmdEFITmdBQkE=');
    req.user = decoded;
    next();
  } catch (ex) {
    return res.status(400).json({ error: 'token invalid' })
  }
};