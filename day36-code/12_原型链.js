let obj = {
  name: 'code',
  age: 20,
};

obj.__proto__ = {};

obj.__proto__.__proto__ = {
  address: '杭州',
};
//当在对象的属性上找某个属性时 如果没找到就去对象的原型上找
console.log(obj.address);
