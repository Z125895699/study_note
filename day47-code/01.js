/*
 * @Descripttion:
 * @version:
 * @Author: coderdashu
 * @Date: 2022-11-08 21:23:48
 * @LastEditors: Andy
 * @LastEditTime: 2022-11-08 21:25:32
 */
const obj = {
  val1: '',
  val2: undefined,
  val3:1
}
let obj1 = JSON.parse(JSON.stringify(obj))
console.log(obj1);


