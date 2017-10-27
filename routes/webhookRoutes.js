const express = require('express');
const { exec } = require('child_process');

const router = express.Router();

router.post('/deploy', (req, res, next) => {
  console.log(req.body);
});