const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models/user');

let opts = {};
opts.secretOrKey = process.env.SECRET;
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('JWT');
module.exports = new JwtStrategy(opts, (jwt_payload, done) => {
  let userId = jwt_payload.sub;
  User.findOne({id: userId}, (err, user) => {
    if (err) {
      return done(err, false);
    }
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  });
});
