/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-05-20 23:19:50
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-05-20 23:32:56
 * @FilePath: /study_note/day51-code/03.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 03.js
export function myFunction() {
  console.log('This is a named export!');
}

export const myConstant = 'This is another named export!';

export default function(){
  console.log('This is a default export!');
}
