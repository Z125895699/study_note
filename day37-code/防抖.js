function debounce(fn, delay) {
  //定义一个定时器 保存上一次的定时器
  let timer = null;
  return function (...args) {
    //取消上一次的定时器
    if (timer) clearTimeout(timer);
    //延迟执行
    timer = setTimeout(() => {
      //调用传进来的函数
      fn.apply(this, args);
    }, delay);
  };
}
