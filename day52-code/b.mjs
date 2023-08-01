import {foo} from './a.mjs';
export function bar() {
  console.log('bar');
  if (Math.random() > 0.5) {
    foo();
  }
}
