/**
 * 函数科里化
 * @param {*} fn 参数为一个函数 fn.length 是函数期望的参数
 * @returns 
 */
function curry(fn) {
  return function curried(...args) {
      if (args.length >= fn.length) {
          return fn.apply(this, args);
      } else {
          return function(...args2) {
              return curried.apply(this, args.concat(args2));
          }
      }
  };
}

function sum(a,b,c){
  return a+b+c
}

let curriedSum = curry(sum);

/**参数复用 延迟执行
 * 调用这个返回
 * return function(...args2) {
              return curried.apply(this, args.concat(args2));
          }
    这样就记住了
 */
let addTwo = curriedSum(2); // 创建一个新的函数，记住了第一次传入的参数2 并且curriedSum(2)被延迟执行了

console.log(addTwo)
console.log(addTwo(3,4));
console.log(addTwo(3,9));

// console.log(curriedSum(1, 2, 3) ); // 6，仍然可以被正常调用
// console.log( curriedSum(1)(2,3) ); // 6，柯里化后的函数
// console.log( curriedSum(1)(2)(3) ); // 6，柯里化后的函数
