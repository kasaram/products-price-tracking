const express = require('express');

const User = require('../models/user');

const router = express.Router();

// user profile
router.get('/profile', (req, res) => {
  // TODO: implement profile get
});

// check user exists by email
router.post('/check', (req, res) => {
  let email = req.body.email;
  User.checkUserExists(email, (userExists) => {
    res.status(200).json({
      success: true,
      msg: 'User check successful',
      userExists: userExists
    });
  });
});

module.exports = router;
