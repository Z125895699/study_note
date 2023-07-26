function debounce(fn, delay) {
  let timer = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply();
    }, delay);
  };
}

function log(){
  console.log(1)
}

debounce(log())
