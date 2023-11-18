let a = 10
let b = a
a = 20
console.log(a,b);

var obj = {
  name: "清心",
  age: 34,
};
var obj2 = obj; //是把obj中地址赋值给obj2,两者指向的是同一个堆内存中地址
obj.name = "小丽"; //操作是堆内存中的数据
console.log(obj === obj2); //true
console.log(obj.name, obj2.name); //小丽 小丽
