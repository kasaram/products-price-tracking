const Crawler = require('crawler');
const _ = require('lodash');
const selectors = require('../helpers/selectors');

module.exports = (product, callback) => {
  const c = new Crawler({
      maxConnections: 10,
      callback: (err, res, done) => {
        if (err) {
          callback(err, null);
        } else {
          const $ = res.$;
          const env = getStoreEnv(product);
          const price = _.trim($(env.price).text());
          const title = _.trim($(env.title).text());
          const image = _.trim($(env.image).attr('src'));

          const item = { price, image, title };
          if (price && title) {
            callback(null, item);
          } else {
            let err = new Error('Failed to read price');
            callback(err, null);
          }
        }
        
        done();
      }
  });
  
  const link = genLink(product);
  if (link) {
    c.queue(link);
  } else {
    const err = new Error("Link invalid");
    callback(err, null);
  }
};

const genLink = (product) => {
  return `https://www.${product.store}/${product.id}`;;
}

const getStoreEnv = (product) => {
  const env = {};
  env.title = selectors[product.store].title;
  env.image = selectors[product.store].image;
  env.price = selectors[product.store].price;
  return env;
}