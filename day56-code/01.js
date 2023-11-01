let obj ={arr:[]}
let obj2 = {...obj}
console.log('obj2 === obj',obj2 === obj);
console.log(obj.arr === obj2.arr);


// let obj = { arr: [] }
// let obj2 = {arr: [...obj.arr]}
// console.log(obj2.arr)
// console.log(obj.arr === obj2.arr);


function showArgs(...args) {
  console.log('args', args)
}

showArgs(1)

let studentNames = ["Daniel", "Jane", "Joe"];

let names = [...studentNames];

console.log(studentNames === names);


let user = { name: "John Doe", age: 10 };

let copiedUser = { ...user };
console.log(user === copiedUser);
