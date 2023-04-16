/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2022-12-01 22:24:05
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2022-12-01 22:57:36
 * @FilePath: /2107/day47-code/02.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// const arr =[1,2]
// console.log(arr.forEach(item=>{}));

const obj ={
  a:0,
  b:1
}
const arr1 =[
  {
    type:'a',
    num:1
  },
  {
    type:'b',
    num:2
  },
  {
    type:'c',
    num:3
  }
]

 arr1.map(item=>{
Object.keys(obj).forEach(e=>{
  if(item.type === e){
    item.num = obj[e]
  }
})
console.log(item);
return item
})

console.log(arr1);

