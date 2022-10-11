let message;

// let age;

console.log(typeof message); // undefined
console.log(typeof age); // undefined

//不会执行
if (message) {
  console.log(1);
}

//会执行
if (!message) {
  console.log(2);
}

let a = 0.1;
let b = 0.2;
console.log(a + b); //不等于0.3
console.log(a + b === 0.3);

let c = 0.05;
let d = 0.25;
console.log(c + d); //等于0.3
console.log(c + d === 0.3);

console.log(5 / 0);
