// myModule.js (CommonJS)
exports.myConstant = 'Some value';

function myFunction() {
  console.log('Hello!');
}
exports.myFunction = myFunction

/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function add(a, b) {
  return a + b;
}
