// function search(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     // 二分查找
//       let mid = Math.floor((left + right) / 2);
//       // 如果中间位置的值等于target 返回 index
//       if (nums[mid] === target) {
//           return mid;
//       }

//       // If the left half is sorted
//       if (nums[left] <= nums[mid]) {
//           if (target >= nums[left] && target < nums[mid]) {
//               right = mid - 1;
//           } else {
//               left = mid + 1;
//           }
//       }
//       // If the right half is sorted
//       else {
//           if (target > nums[mid] && target <= nums[right]) {
//               left = mid + 1;
//           } else {
//               right = mid - 1;
//           }
//       }
//   }
//   return -1;
// }

// // 测试示例
// console.log(search([4,5,6,7,0,1,2], 0)); // 应该返回 4
// console.log(search([4,5], 5))


function removeElement(nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
      if (nums[j] !== val) {
          nums[i] = nums[j];
          i++;
      }
  }
  return i;
}

// 测试示例
console.log(removeElement([3,2,2,3], 3)); // 应该输出 2
