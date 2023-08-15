// const fn = (s) => (
//   new Promise((resolve, reject) => {
//     if (typeof s === 'number') {
//       resolve();
//     } else {
//       reject();
//     }
//   })
//   .then(
//     res => console.log('参数是一个number'),
//   )
//   .catch(err => console.log('参数是一个字符串'))
// )
// fn('1');
// fn(1);

// Promise.resolve().then(() => {
//   console.log(0);
//   return Promise.resolve(4);
// }).then((res) => {
//   console.log(res)
// })

// Promise.resolve().then(() => {
//   console.log(1);
// }).then(() => {
//   console.log(2);
// }).then(() => {
//   console.log(3);
// }).then(() => {
//   console.log(5);
// }).then(() =>{
//   console.log(6);
// })

// 输出为0 1 2 3 4 5 6



// const p = new Promise((resolve, reject) => {
//   // 同步执行
//   resolve(1);
// });
// p.then(
//   res => console.log(res),
//   err => console.log(err)
// );

import myPromise from "./myPromise.js";

// const p = new myPromise((resolve, reject) => {
//   // 同步执行
//   resolve(1);
//   // reject(2);

//   // 同步执行
//   // setTimeout(() => resolve(1), 2000);
// });
// p.then(
//   res => console.log(res),
//   err => console.log(err)
// );
// // 只输出了1

// p.then((res) => console.log(res));// 1
// p.then((res) => console.log(res));// 1
// p.then((res) => console.log(res));// 1


const p1 = new myPromise((resolve, reject) => {
  resolve(1);
});

p1.then((res) => {
  console.log(res);
  return new myPromise((resolve) => resolve(2));
}).then((res) => {
  console.log(res);
});

// 1
// 2


