var pad = require('pad');

module.exports = {
  hexByte: function(byte) {
    return '0x' + pad(2, byte.toString(16).toUpperCase(), '0');
  }
};
