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

          const price = _.trim($(process.env.PRICE_AMZN).text());
          const title = _.trim($(process.env.TITLE_AMZN).text());
          let image = _.trim($(process.env.IMAGE_AMZN).attr('src'));

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
  } else if (product.store === 'amazon') {
    link = `https://www.flipkart.com/${product.id}`;
  }
  
  return link;
}