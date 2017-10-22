const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

module.exports = (user) => {
  let options = {};
  options.expiresIn = "7d";
  
  let token = jwt.sign(user, secret, options);

  return token;
}
