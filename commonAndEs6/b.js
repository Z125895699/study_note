
//这是导入默认导出的
import a from './a.js'

//这是导入命名导出的
import { obj1 } from './a.js'

/**
 * 导出的是只读的,但是可以给对象添加属性和方法
 */
// obj = {}
a.count++
console.log(a, 'b.js');
console.log(obj1, 'b.js');
