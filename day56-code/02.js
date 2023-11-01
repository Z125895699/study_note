let price = 10
let count = 3
let total
let dep = new Set()

function effect(){
  total = price * count 
}

function track(){
  dep.add(effect)
}

function trigger(){
  dep.forEach(effect => effect())
}

track()
trigger()
console.log(total) // 30


count = 4
trigger()
console.log(total) //30
