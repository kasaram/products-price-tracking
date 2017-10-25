const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema({
  provider: {
    type: String,
    required: true
  },
  provider_uid: {
    type: String,
    required: true
  },
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
  timestamps: true
});

const User = module.exports = mongoose.model('User', UserSchema); // Export Mongoose Model

// Create user password hash and save user to database
module.exports.createUserByEmail = (user, callback) => {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) throw err;
      user.provider = 'email';
      user.provider_uid = user.email;
      user.password = hash;
      callback(user.save());
    });
  });
};

// compare password of the requested user
module.exports.comparePassword = (password, hash, callback) => {
  bcrypt.compare(password, hash, (err, match) => {
    if (err) throw err;
    callback(null, match);
  });
};

// check if user already exists
module.exports.checkUserExists = (uid, callback) => {
  User.findOne({provider_uid: uid}, (err, user) => {
    if (err) throw err;
    user ? callback(true) : callback(false);
  });
};

// find user by id
module.exports.findUserByUid = (uid, callback) => {
  User.findOne({provider_uid: uid}, (err, user) => {
    if (err) throw err;
    callback(user);
  });
};

// find user or create if not found
module.exports.findOrCreateByFacebook = (profile, callback) => {
  User.findOne({
    provider: 'facebook',
    provider_uid: profile.id
  }, (err, user) => {
    if (err) return callback(err, null);
    if (!user) {
      const newUser = newUserFromFacebook(profile);
      newUser.save((err, user) => {
        if (err) return callback(err, null);
        return callback(null, user);
      });
    } else {
      return callback(null, user);
    }
  });
};

// create new user instance and populate fields for facebook passport
const newUserFromFacebook = (profile) => {
  const user = new User();
  user.first_name = profile._json.first_name;
  user.last_name = profile._json.last_name;
  user.email = profile._json.email;
  user.provider = 'facebook'
  user.provider_uid = profile.id;
  user.password = bcrypt.hashSync(user.provider_uid, 8);
  return user;
}