const express = require('express');

const router = express.Router();

// signup user
router.post('register', (req, res, next) => {
  res.send('User registration');
});

// login user
router.post('login', (req, res, next) => {
  res.send('Users list coming soon...');
});

module.exports = router;