function faultyFunction() {
  // 由于obj未定义，访问obj.property会抛出TypeError
  return obj.property;
}

try {
  faultyFunction(); // 调用会抛出错误的函数
} catch (e) {
  // 捕获到错误，并输出错误的stacktrace
  console.error(e.stack);
}
