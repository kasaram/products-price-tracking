const express = require('express');

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
  console.log(user);
});

// login user
router.post('login', (req, res, next) => {
  res.send('Users list coming soon...');
});

module.exports = router;