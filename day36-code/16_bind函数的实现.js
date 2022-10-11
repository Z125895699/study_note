function foo() {
  console.log('函数执行', this);
}

function sum(num1, num2, num3, num4) {
  console.log(num1 + num2 + num3 + num4);
}

let newSum = sum.bind('abc', 10, 20, 30, 40);

newSum();
