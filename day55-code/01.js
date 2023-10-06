const array1 = new Array(4).fill([])
array1[0].push('once')
console.log('array1', array1)

const array2 = Array.from(Array(4),()=>[])
array2[0].push('once')
console.log('array2', array2)

