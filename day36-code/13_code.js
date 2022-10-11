let a = '';
console.log(Boolean(a));
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean('a'));

console.log((3 || 2) && (5 || 0));
//逻辑或 有一个为true就为true
console.log(5 || 0);

//逻辑或为真 返回第一个为true的数
//逻辑与为真 返回第二个为true的数

let obj = {};
console.log(Boolean(obj));
console.log(obj || '');
