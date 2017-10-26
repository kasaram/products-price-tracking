const express = require('express');
const router = express.Router();
const verify = require('../config/auth');
const Link = require('../models/link');
const validate = require('../services/validator');

router.route('')
  .get(verify.jwt, (req, res, next) => {
    const user = req.user;
    Link.findUserLinks(user._id, (err, links) => {
      if (err) next(err);
      res.status(200).json({
        success: true,
        msg: "Links fetched",
        links
      });
    });
  })
  .post(verify.jwt, validate.link, (req, res, next) => {
    let { price, title, image } = req.body.item;
    price = parseFloat(price.replace(/[^\d.]/g, ''));
    const link = new Link(req.body);
    link.price = price
    link.title = title;
    link.image = image;
    link.user = req.user._id;
    link.history.push(price);
    link.save((err, link) => {
      if (err) return next(err);
      return res.status(201).json({
        success: true,
        msg: "Link saved"
      });
    });
  });

module.exports = router;