const express = require('express');
const { exec } = require('child_process');

const router = express.Router();

router.post('/deploy', (req, res, next) => {
  console.log(req.body);
  exec('git pull origin deploy', (err, stdout, stderr) => {
    if (err) {
      console.log(err);
    }

    console.log("STDOUT", stdout);
    console.log("STDERR", stderr);
    res.sendStatus(200);
  });
});

module.exports = router;