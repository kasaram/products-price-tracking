const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = module.exports = mongoose.model('User', UserSchema); // Export Mongoose Model

// Create user password hash and save user to database
module.exports.createUser = (user, callback) => {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) throw err;
      user.password = hash;
      callback(user.save());
    });
  });
};

// compare password of the requested user
module.exports.comparePassword((password, hash, callback) => {
  bcrypt.compare(password, hash, (err, match) => {
    if (err) throw err;
    callback(null, match);
  });
});