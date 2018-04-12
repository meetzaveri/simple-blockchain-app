const crypto = require('crypto');

const genRandomString = function(length){
  return crypto.randomBytes(Math.ceil(length/2))
          .toString('hex') /** convert to hexadecimal format */
          .slice(0,length);   /** return required number of characters */
};

exports.sha = function(salt){
  var hash = crypto.createHmac('sha256', salt); /** Hashing algorithm sha512 */
  hash.update('1a2b3c');
  var value = hash.digest('hex');
  console.log('Hash value',value);
  return value;
};
