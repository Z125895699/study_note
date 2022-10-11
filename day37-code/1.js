function num(length) {
  if (length === 0) {
    total = 1;
  } else {
    total = 2 * (num(length - 1) + 1);
  }
  return total;
}

console.log(num(10));
