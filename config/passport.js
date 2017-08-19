const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const authConfig = require('./auth');
const User = require('../models/user');

module.exports = (passport) => {
  const opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  opts.secretOrKey = authConfig.secret;

  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
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
  }));
};