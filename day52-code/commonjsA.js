exports.loaded = false;
const b = require('./commonjsB');
module.exports = {
  bWasLoaded: b.loaded, //true
  loaded: true
};
