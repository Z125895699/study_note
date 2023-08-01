import {bar} from './b.mjs';
export function foo() {
  console.log('foo');
  bar();
  console.log('执行完毕');
}
foo();
