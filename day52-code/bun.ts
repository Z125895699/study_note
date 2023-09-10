


const file = Bun.file("01.html");
const contents = await file.text();
// const json = await file.json()
const start= performance.now();
console.log('contents', contents)
// console.log('json', json)
const end = performance.now();
console.log(`JavaScript took ${end - start} milliseconds.`);
