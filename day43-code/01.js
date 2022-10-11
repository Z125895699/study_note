// let [a, b, c] = [1, 2, 3];
// console.log(a, b, c);

//嵌套数组解构
// let [foo, [[bar], baz]] = [1, [[2], 3]];
// console.log(foo, bar, baz);

//对象的方法解构
const { log } = console;
log('hello');

//对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
let obj = { foo: 'aa', bar: 'bb' };
let { foo: a, bar: b } = obj;

log(a, b);

let obj1 = {
  p: [
    'hello',
    {
      y: 'world',
    },
  ],
};

let { p } = obj1;
console.log(p);

const [arr1, ...arr2] = [1, 2];
log(arr1, arr2);
