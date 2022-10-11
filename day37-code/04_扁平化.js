let arr = [1, 2, [3, 4], [5, [, 6, 7]]];
// function flattern(arr, temp = []) {
//   for (let k in arr) {
//     if (Array.isArray(arr[k])) {
//       flattern(arr[k], temp);
//     } else {
//       temp.push(arr[k]);
//     }
//   }
//   return temp;
// }
// console.log(flattern(arr));

//reduce实现扁平化
function flattern(arr) {
  return arr.reduce((pre, cur) => {
    return Array.isArray(cur) ? [...pre, ...flattern(cur)] : [...pre, cur];
  }, []);
}
console.log(flattern(arr));

//递归
// function flattern(arr, result = []) {
//   for (let i in arr) {
//     if (typeof arr[i] === 'object') {
//       flattern(arr[i], result);
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// console.log(flattern(arr));
