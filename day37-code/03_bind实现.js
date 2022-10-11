Function.prototype.hybind = function (thisArg, ...argArray) {
  var fn = this;
  //1、转换thisArg为对象类型
  thisArg = thisArg ? Object(thisArg) : window;

  //bind绑定后的返回函数
  return function proxyFn(...args) {
    thisArg.fn = fn;
    var finalArgs = [...argArray, ...args];
    //调用返回函数的返回值
    var result = thisArg.fn(...finalArgs);
    delete thisArg.fn;
    return result;
  };
};

function foo() {
  console.log('调用', this);
  return 20;
}

function sum(num1, num2, num3, num4) {
  console.log(num1 + num2 + num3 + num4, this);
}

// let bar = sum.bind(123);
// bar(10, 20, 30);

// let bar = foo.hybind(123);
// let result = bar();
// console.log(result);

let bar = sum.hybind(123, 10, 20);
let result = bar(30, 40);
