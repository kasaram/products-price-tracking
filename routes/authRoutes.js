const express = require('express');

const User = require('../models/user');
const validator = require('../services/validator');

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
        msg: 'Registration succsessful'
      });
    });
  });
});

// login user
router.post('login', (req, res, next) => {
  
});

module.exports = router;
