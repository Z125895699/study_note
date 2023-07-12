let obj = { foo: 'bar', baz: 'qux' };
let { foo, baz } = obj;  // foo = 'bar', baz = 'qux'

console.log(foo)
foo = 'bar1'
console.log(foo)
//原始的obj.foo不会变 解构相当于创建一个新的变量
console.log(obj.foo)

