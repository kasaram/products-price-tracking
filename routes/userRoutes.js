const express = require('express');

const User = require('../models/user');

const router = express.Router();

// user profile
router.get('/profile', (req, res) => {
  // TODO: implement profile get
});

module.exports = router;