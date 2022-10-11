function throttle(fn, interval) {
  let lastTime = 0;
  return function () {
    const nowtime = new Date().getTime;
    const remainTime = interval - (nowtime - lastTime);

    if (remainTime <= 0) {
      fn.apply(this);
      lastTime = nowtime;
    }
  };
}
 