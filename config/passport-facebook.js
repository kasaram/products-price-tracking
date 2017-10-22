const FacebookStrategy = require('passport-facebook');

const User = require('../models/user');

module.exports = new FacebookStrategy({
  clientID: process.env.FACEBOOK_KEY,
  clientSecret: process.env.FACEBOOK_SECRET,
  callbackURL: process.env.API + '/auth/facebook/callback'
}, (accessToken, refreshToken, profile, done) => {
  console.log("PROFILE", profile);
});
