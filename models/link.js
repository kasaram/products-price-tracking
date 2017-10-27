const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LinkSchema = new Schema({
  store: {
    type: String,
    required: true,
    enum: ['amazon.in', 'flipkart.com']
  },
  productId: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: String,
  title: {
    type: String,
    required: true
  },
  history: [Number],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

class Link {
  static findUserLinks(user, callback) {
    this.find({user})
      //.populate('user', '-password')
      .exec((err, links) => {
        if (err) return callback(err, null);
        callback(null, links);
      });
  }
}

LinkSchema.loadClass(Link);

module.exports = mongoose.model('Link', LinkSchema);