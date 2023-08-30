// worker.js
self.addEventListener('message', function (e) {
  const data = e.data;
  switch (data.cmd) {
    case 'start':
      const processedData = processData(data.array);
      self.postMessage({ array: processedData });
      break;
    default:
      self.postMessage('Unknown command');
  }
}, false);

function processData(array) {
  // 在此例中，我们简单地将数组的每个元素加1
  array.push('a');
  if (array.length == 1) {
    array.push('b');
  }
  return array;
}
