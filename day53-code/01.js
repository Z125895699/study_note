
import 'dotenv/config'

console.log(process.env.TITLE);

let obj  = {
  name:'coder',
  age:20
}

let {name} = obj
obj.name = 'fugui'

console.log(name,obj);
