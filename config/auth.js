const passport = require('passport');

// Jwt passport auth
module.exports.jwt = (req, res, next) => {
  passport.authenticate('jwt', {session: false}, (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      return res.status(401).json({
        success: false,
        msg: "Not authorized"
      });
    }
    req.user = user;
    return next();
  })(req, res, next);
};

// Facebook passport auth
module.exports.facebook = passport.authenticate('facebook', {scope: ['public_profile', 'email'], session: false});
