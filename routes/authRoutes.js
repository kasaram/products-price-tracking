const express = require('express');

const User = require('../models/user');
const validator = require('../services/validator');
const genToken = require('../config/token');

const router = express.Router(); // router instance

// signup user
router.post('/register', validator.userValidate, (req, res, next) => {
  let user = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password
  }
  User.createUser(new User(user), (promise) => {
    promise.onResolve((err, user) => {
      if (err) throw err;
      res.status(201).json({
        success: true,
        msg: 'Registration succsessful, You can now log in'
      });
    });
  });
});

// login user
router.post('/login', (req, res, next) => {
  let userEmail = req.body.email;
  let userPassword = req.body.password;
  User.findUserByUsername(userEmail, (user) => {
    if (!user) {
      res.status(401).json({
        success: false,
        msg: 'Wrong username, or password'
      });
    } else {
      User.comparePassword(userPassword, user.password, (err, match) => {
        if (match) {
          let token = genToken(user);
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

module.exports = router;
