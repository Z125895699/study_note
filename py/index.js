const array1 = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Jim' },
];

const array2 = [
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Jim' },
  { id: 5, name: 'Jack' },
];


// 找到两个数组中 id 相同的对象
const commonItems = array1.filter(item1 => array2.some(item2 =>
  item2.id === item1.id
));


// 使用 Map 存储 array1 中的对象，键为 id，值为对象
// const map1 = new Map(array1.map(item => [item.id, item]));

// // 找到两个数组中 id 相同的对象
// const commonItems = array2.filter(item2 => map1.has(item2.id));

console.log(commonItems); // 输出: [ { id: 2, name: 'Jane' }, { id: 3, name: 'Jim' } ]
