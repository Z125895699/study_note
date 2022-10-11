Function.prototype.hycall = function (thisArg, ...args) {
  //this为调用的函数
  // console.log(this);
  let fn = this;

  //1、绑定的this转换为对象类型.不是对象不能添加属性
  thisArg = thisArg ? Object(thisArg) : window;

  //2、隐式绑定thisArg
  thisArg.fn = fn;

  //3、函数调用
  thisArg.fn(...args);
  delete thisArg.fn;
};

function foo() {
  console.log('函数执行', this);
}
function bar(num1, num2) {
  console.log(num1 + num2, this);
}

//call第一个参数为this指向 第二个参数为有序列表
// foo.call({});
// bar.call(123, 10, 20);

// foo.hycall({});
bar.hycall(123, 10, 20);
