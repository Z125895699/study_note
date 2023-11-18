// 创建一个函数
function fun() {
  // 定义局部变量
  var name = "arry老师";
  // 返回一个局部函数
  return function () {
    console.log(name);
  };
}

// 调用外部函数，就能得到内部函数，用变量inn来接收
var inn = fun();
// 定义一个全局变量
var name = "icoding";
inn()


function bar(){
  var age = 20;
  console.log(age)
}
var age = 30
bar()
