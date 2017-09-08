const jwt = require('jsonwebtoken');
const secret = require('./auth').secret;

module.exports = (user) => {
  let options = {};
  options.expiresIn = "7d";
  
  let token = jwt.sign(user, secret, options);

  return token;
}
