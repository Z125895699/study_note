// 'use strict';

// function foo() {
//   console.log(this);
// }

// foo();

// setTimeout(() => {
//   console.log(this);
// }, 1000);

let obj = { name: 'coder' };
const { name: foo } = obj;

console.log(foo);
