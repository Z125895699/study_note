b(); // call b second
console.log(c); //undefined
var b = 'Hello world';
function b() {
  console.log('call b fist');
}
function b() {
  console.log('call b second');
}
var c = 'Hello ';

//在提升过程中 相同的函数会覆盖上一个函数 并且函数提升优先于变量提升
