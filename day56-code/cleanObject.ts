function cleanObject(obj: any): any {
  // 处理数组
  if (Array.isArray(obj)) {
    return obj
      .map(value => cleanObject(value)) // 递归清理每个元素
      .filter(Boolean); // 过滤掉假值
  } else if (typeof obj === 'object' && obj !== null) {
    // 处理对象
    const cleanObj: { [key: string]: any } = {};
    Object.keys(obj).forEach(key => {
      const value = obj[key];
      if (Boolean(value)) {
        // 递归清理值，并只有在值不是假值时才添加到结果对象
        cleanObj[key] = cleanObject(value);
      }
    });
    return cleanObj;
  }
  // 不是对象或数组，直接返回值
  return obj;
}

// 示例用法
const obj = {
  a: null,
  b: false,
  c: true,
  d: 0,
  e: '',
  f: 'hello',
  g: [false, true, ['nested', 0]],
  h: { i: false, j: 'nested' },
};

const obj1 = [null,0,false,1]

const obj2 = {
  "a":null,
  "b":[false,1]
}

console.log(cleanObject(obj));
console.log(cleanObject(obj1));
console.log(cleanObject(obj2));
