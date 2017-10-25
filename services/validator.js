const User = require('../models/user');
const _ = require('lodash');
const crawl = require('../services/crawler');
const sanitizer = require('../helpers/param-sanitizer');

// validate user middleware
const userValidate = (req, res, next) => {
  let errors = {};

  // email regexp
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!req.body.first_name) { // check first name
    errors.first_name = 'First Name is required';
  }
  if (!req.body.last_name) { // check last name
    errors.last_name = 'Last Name is required';
  }
  if (!req.body.email) { // check email
    errors.email = 'Email is required';
  } else if (!re.test(req.body.email)) {
    errors.email = 'Enter a valid email';
  }

  if (!req.body.password) { // check password
    errors.password = 'Password is required';
  } else if (req.body.confirm_password !== req.body.password) {
    errors.confirm_password = 'Passwords does not match';
  }

  User.checkUserExists(req.body.email, (userExists) => {
    if (userExists) {
      errors.email = 'User already exists';
    }

    if (Object.keys(errors).length === 0 && errors.constructor === Object) { // validated; since errors object is empty
      return next();
    } else { // not validated. errors present. respond with errors.
      res.status(401).json({
        success: false,
        msg: 'Bad user data',
        errors: errors
      });
    }
  });
};

// Validate links
const linkValidator = (req, res, next) => {
  req.body = sanitizer(req.body, ['store', 'productId']);
  const errors = {};

  if (!req.body.store) {
    errors.store = "Store name is required";
  }
  if (req.body.store && !_.includes(['amazon', 'flipkart'], req.body.store)) {
    errors.store = "Please select a valid store (Amazon or Flipkart)";
  }
  if (!req.body.productId) {
    errors.productId = "Product id is required";
  }

  if (Object.keys(errors).length) {
    return res.status(200).json({
      success: false,
      msg: "Bad Data",
      errors
    });
  } else {
    const product = {};
    product.store = req.body.store;
    product.id = req.body.productId;
    crawl(product, (err, item) => {
      if (err) return next(err);
      req.body.item = item;
      return next();
    });
  }
  
};

module.exports.userValidate = userValidate;
module.exports.link = linkValidator;
