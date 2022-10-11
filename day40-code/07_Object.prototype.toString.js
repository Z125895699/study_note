//对于Object方法 直接调用toString就能返回[object Object]
// console.log(Object.prototype.toString({})); //[object Object]
//而对于其他对象，则需要通过call来调用
console.log(Object.prototype.toString.call('1')); // [object String]
console.log(Object.prototype.toString.call(true)); //[object Boolean]
