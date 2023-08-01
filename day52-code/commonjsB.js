exports.loaded = false;

/**
 * 引入commonjsA不会从头开始 nodejs会提供一个未完成的commonjsA的导出结果
 */
const a = require('./commonjsA');
module.exports = {
  aWasLoaded: a.loaded, //false
  loaded: true
};
