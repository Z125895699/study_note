

//新建一个 0 到 12 的数组
let arr = Array.from({ length: 13 }, (v, i) => i);

let obj = arr.reduce((acc, curr, index) => ({
  ...acc,
  [index+1]: index
}),{})

console.log(obj);
