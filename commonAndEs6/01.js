let a = 1

/**
 * 复杂类型属于浅拷贝,这样在导出的模块修改时会影响另一个模块的值
 */
let obj = {
  b: 98
}
console.log(obj, '01.js')
module.exports = {
  a,
  obj
}
