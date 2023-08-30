try {
  [1, 2, 3, 4, 5].forEach((item, index) => {
      console.log(item);
      if (item === 3) { // 当元素值为3时终止循环
          throw new Error("BreakOutOfLoop");
      }
  });
} catch (e) {
  console.log('终止')
  if (e.message !== "BreakOutOfLoop") throw new Error("BreakOutOfLoop"); // 如果不是我们的自定义错误，重新抛出
}
