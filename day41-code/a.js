let count = 1;
let plusCount = () => {
  count++;
};

setTimeout(() => {
  console.log('a', count);
}, 1000);

module.export = {
  count,
  plusCount,
};
