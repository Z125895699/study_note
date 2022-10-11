let obj = {
  a: 1,
  b: 2,
};

obj1 = {
  //obj的副本
  ...obj,
  //覆盖b的值
  b: 1,
};

console.log(obj1);
