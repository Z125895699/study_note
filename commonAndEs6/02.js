/**
 * 当使用require命令加载某个模块时，就会运行整个模块的代码
 * 导出模块的所有代码都会运行
 * 如果多次加载同一个模块,只会加载一次,取缓存的值
 */
//以下俩种方式导入是一样的
require('./01')
const common = require('./01')

// a = 3
// common.obj.b = 1
console.log(common, 'a');
