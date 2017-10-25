const FacebookStrategy = require('passport-facebook').Strategy;

const User = require('../models/user');

let opts = {};
opts.clientID = process.env.FACEBOOK_KEY,
opts.clientSecret = process.env.FACEBOOK_SECRET,
opts.callbackURL = process.env.API + '/auth/facebook/callback',
opts.profileFields = ['id', 'displayName', 'email', 'name', 'birthday', 'gender'];
module.exports = new FacebookStrategy(opts, (accessToken, refreshToken, profile, done) => {
  User.findOrCreateByFacebook(profile, (err, user) => {
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
