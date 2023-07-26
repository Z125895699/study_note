export function debounce(func,delay){
  let timeout 

  return function(...args){
    const context = this 

    //清楚之前的timeout
    if(timeout)clearTimeout(timeout)

    //timeout会立即返回
    timeout = setTimeout(() => {
      func.apply(context,args)
    }, delay);
  }
}
