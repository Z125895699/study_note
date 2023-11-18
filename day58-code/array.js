// 创建一个普通的数组
let fruits = ['apple', 'banana', 'orange'];

//您需要为数组的每个元素都设置一个 getter 和 setter。
// 初始化 _value 属性存储实际的数组值
fruits._value = fruits[0];

// 使用 Object.defineProperty 为数组的第一个元素定义 getter 和 setter
Object.defineProperty(fruits, 0, {
  get: function() {
    console.log('Getter for index 0 called');
    return this._value;
  },
  set: function(newValue) {
    console.log('Setter for index 0 called with value:', newValue);
    this._value = newValue;
  }
});

// 读取 fruits[0]，应该触发 getter
console.log(fruits[0]); // 输出 'apple'，触发 getter

// 尝试通过索引直接修改数组的第一个元素
fruits[0] = 'strawberry'; // 应该触发 setter

// 再次读取 fruits[0]，检查值是否已更新
console.log(fruits[0]); // 输出 'strawberry'，再次触发 getter
