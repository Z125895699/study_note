/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-02-19 17:47:00
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-02-19 17:53:51
 * @FilePath: /2107/day49-code/02.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// const obj ={
//   car:3000
// }
// console.log(obj.car)


const obj ={}
let val=3000
Object.defineProperty(obj,'price',{
  enumerable:true,
  configurable:true,
  get(){
    console.log('price属性被读取了');
    return val
  },
  set(newVle){
    console.log('price属性被修改了');
    val = newVle
  }
})
console.log(obj.price)
obj.price = 5000
console.log(obj.price)

