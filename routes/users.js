const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Users list coming soon...');
});

module.exports = router;