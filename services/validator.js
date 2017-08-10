
// validate user middleware
let userValidate = (req, res, next) => {
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
  
  if (Object.keys(errors).length === 0 && errors.constructor === Object) { // validated; since errors object is empty
    return next();
  } else { // not validated. errors present. respond with errors.
    res.status(401).json({
      success: false,
      msg: 'Bad user data',
      errors: errors
    });
  }
};

module.exports.userValidate = userValidate;