function Person() {
  this.name = 'coder';
  // return {
  //   age: 19,
  // };
  return 'tom';
}

//1、创建一个新对象
//2、对象连接到构造函数原型上 并绑定this
//3、执行构造函数 为这个对象添加属性
//4、返回新对象

//但是这里要求构造函数必须是返回一个对象 如果返回的不是对象 那么还是会按照new的实现步骤 返回新生成的对象
const p = new Person();
console.log(p);
console.log(p.name);
