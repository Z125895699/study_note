export function throttle(func, delay) {
  //上次的时间
  let lastTime = 0;

  return function (...args) {
    const context = this;
    const nowTime = Date.now();

    if (nowTime - lastTime >= delay) {
      //当前的日期赋给上次的时间
      lastTime = nowTime;
      func.apply(context, args);
    }
  };
}
