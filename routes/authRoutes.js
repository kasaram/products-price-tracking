const express = require('express');

const User = require('../models/user');
const validator = require('../services/validator');
const genToken = require('../config/token');
const auth = require('../config/auth');

const router = express.Router(); // router instance

// signup user
router.post('/register', validator.userValidate, (req, res, next) => {
  let user = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password
  }
  User.createUserByEmail(new User(user), (promise) => {
    promise.onResolve((err, user) => {
      if (err) throw err;
      res.status(201).json({
        success: true,
        msg: 'Registration succsessful, You can now log in',
        user: {
          first_name: user.first_name, 
          last_name: user.last_name, 
          email: user.email, 
          provider: user.provider
        }
      });
    });
  });
});

// login user
router.post('/login', (req, res, next) => {
  let userEmail = req.body.email;
  let userPassword = req.body.password;
  User.findUserByUid(userEmail, (user) => {
    if (!user) {
      res.status(401).json({
        success: false,
        msg: 'Wrong username, or password'
      });
    } else {
      User.comparePassword(userPassword, user.password, (err, match) => {
        if (match) {
          let token = genToken(user.provider_uid);
          res.status(200).json({
            success: true,
            msg: 'Login Successful',
            token: token,
            username: user.email
          });
        } else {
          res.status(401).json({
            success: false,
            msg: 'Wrong username, or password'
          });
        }
      });
    }
  });
});

// authenticate facebook
router.get('/facebook', auth.facebook);

// facebook auth callback
router.get('/facebook/callback', auth.facebook, (req, res) => {
  const user = req.user;
  const token = genToken(user.provider_uid);
  res.status(200).json({
    success: true,
    msg: "Facebook authentication successful",
    token,
    username: user.email
  });
});

module.exports = router;
