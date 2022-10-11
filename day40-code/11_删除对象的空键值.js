const isVoid = (value) => value === undefined || value === null || value === '';
let obj = {
  page: 1,
  size: 10,
  title: '',
};
const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};
console.log(cleanObject(obj));
