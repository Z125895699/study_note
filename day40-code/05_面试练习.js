let a = {
  name: 'Julia',
  age: 20,
};
function change(o) {
  o.age = 24;
  o = {
    name: 'Kath',
    age: 30,
  };
  return o;
}
//函数传参进来的o传递的是对象在堆中的内存地址值 return的是另一个内存地址
//所以return的不是原本的a return的是b新的一个内存地址
let b = change(a); // 注意这里没有new，后面new相关会有专门文章讲解
console.log(b.age); // 第一个console. 30
console.log(a.age); // 第二个console 24
console.log(a);
console.log(b);
