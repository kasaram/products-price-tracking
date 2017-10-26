const Crawler = require('crawler');
const _ = require('lodash');
var getImgSrc = require('get-img-src');

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
  let link;
  if (product.store === 'amazon') {
    link = `https://www.amazon.in/${product.id}`;
  } else if (product.store === 'flipkart') {
    link = `https://www.flipkart.com/${product.id}`;
  }
  
  return link;
}

const getStoreEnv = (product) => {
  let env = {};
  switch (product.store) {
    case 'amazon':
      env.title = process.env.TITLE_AMZN;
      env.image = process.env.IMAGE_AMZN;
      env.price = process.env.PRICE_AMZN;
      break;
    case 'flipkart':
      env.title = process.env.TITLE_FLPKT;
      env.image = process.env.IMAGE_FLPKT;
      env.price = process.env.PRICE_FLPKT;
      break;
  }
  return env;
}