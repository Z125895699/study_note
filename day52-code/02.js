

function flatten(arr){
  if(!arr.length) return []

  return arr.reduce(((pre,cur)=>
    Array.isArray(cur)  ? [...pre,...flatten(cur)]:[...pre,cur]
  ),[])
}



let arr =[1,2,[3,4]]

console.log(arr.flat())

console.log(flatten(arr))

console.log(typeof [1,2])
console.log(typeof {name:1})

console.log( [1,2] instanceof Object)
console.log( {name:1} instanceof Object)
