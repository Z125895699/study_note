function sleep(milliseconds) {
  var start = new Date().getTime();
  console.log(`start: ${start}`);
  for (var i = 0; i < 1e7; i++) {
    const delta = new Date().getTime() - start;
    // console.log(`milliseconds passed: ${delta}`);
    if (delta > milliseconds) {
      console.log('exiting');
      console.log(`final delta: ${delta}`);
      break;
    }
  }
}

sleep(5000);
console.log('the end');
