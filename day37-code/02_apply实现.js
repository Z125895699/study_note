Function.prototype.hyapply = function (thisArg, argArray) {
  let fn = this;

  //1、转换thisArg为对象类型
  thisArg = thisArg ? Object(thisArg) : window;

  //2、隐式绑定thisArg
  thisArg.fn = fn;

  //3、函数调用 apply传参数只能传数组
  if (argArray) {
    thisArg.fn(...argArray);
  } else {
    thisArg.fn();
  }

  delete thisArg.fn;
};

function foo() {
  console.log('函数执行', this);
}

function bar(num1, num2) {
  console.log(num1 + num2, this);
}

// foo.apply({});
// bar.apply({}, [10, 20]);

// foo.hyapply({});
// bar.hyapply({}, [10, 20]);
