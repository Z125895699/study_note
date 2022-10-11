const map = new Map();

const obj = { name: 'coder' };

map.set(obj, 'ok');
console.log(map.get(obj)); //ok
console.log(map.has(obj)); //true
console.log(map);

console.log(map.delete(obj)); //true
console.log(map.has(obj)); //false
