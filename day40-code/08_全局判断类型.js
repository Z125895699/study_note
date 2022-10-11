function getType(obj) {
  let type = typeof obj;
  if (type !== 'object') {
    // 先进行typeof判断，如果是基础数据类型，直接返回
    return type;
  }
  // 对于typeof返回结果是object的，再进行如下的判断，正则返回结果
  return Object.prototype.toString
    .call(obj)
    .replace(/^\[object (\S+)\]$/, '$1'); // 注意正则中间有个空格
}

//正则中的$1对应正则中的(\S+)

console.log(getType([])); //Array
console.log(getType('123')); //string
console.log(getType(undefined)); //undefined

//typeof null为object 原因是对象存在在计算机中，都是以000开始的二进制存储，所以检测出来的结果是对象
