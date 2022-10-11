Function.prototype.hyapply = function (thisArg, argArray) {
  //1、需要知道哪个函数调用了 this代表调用者
  var fn = this;

  //2、处理绑定的thisArg
  thisArg = thisArg ? Object(thisArg) : window;

  //3、执行函数
  thisArg.fn = fn;
  //隐式绑定
  if (!argArray) {
    thisArg.fn();
  } else {
    thisArg.fn(...argArray);
  }
  delete thisArg.fn;
};

function sum(num1, num2) {
  console.log(num1 + num2, this);
}
function bar() {
  console.log('bar函数执行');
}

// foo.apply({}, [20, 30]);
sum.hyapply({}, [20, 30]);
bar.hyapply({});
