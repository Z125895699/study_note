let person = [{ name: 'kevin' }, { name: 'daisy' }];

// let name = person.map((item) => item.name);

var curry = function (fn) {
  //arguments变成数组继承数组的slice方法
  var args = [].slice.call(arguments, 1);
  console.log(args);
  console.log(args instanceof Array);
  return function () {
    var newArgs = args.concat([].slice.call(arguments));
    return fn.apply(this, newArgs);
  };
};

function add(a, b) {
  console.log(a + b);
}

// function addCurry(a) {
//   return function (b) {
//     console.log(a + b);
//   };
// }

var addCurry = curry(add, 1, 2);
addCurry();
// addCurry(1)(2); // 3
