let obj = [
  { name: '张三', job: '数据分析师', country: '中国' },
  { name: '艾斯', job: '科学家', country: '中国' },
  { name: '雷尔', job: '科学家', country: '美国' },
  { name: '鲍勃', job: '软件工程师', country: '印度' },
];

const obj1 = obj.reduce((group, curP) => {
  let newkey = curP['country'];
  if (!group[newkey]) {
    group[newkey] = [];
  }
  group[newkey].push(curP);
  return group;
}, []);

console.log(obj1);
