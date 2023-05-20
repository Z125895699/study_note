// 02.js
import myDefault from './01.js';

myDefault();


if (Math.random() > 0.5) {
  import('./01.js').then((myModule) => {
    // Use myModule here...
    console.log(Math.random())
    myDefault();
  });
}
