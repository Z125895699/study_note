let obj ={
  name:'fugui',
  age:20
}

const bucket = new WeakMap()
let handler={
  //拦截读取操作
  get:function(target,key){
    track(target,key)
    return target[key]
  },
  set:function(target,key,value){
    target[key]=value
    trigger(target,key)
  }
}
//对obj 做了一个代理
const data = new Proxy(obj,handler)

//跟踪依赖
function track(target,key){
  //没有activeEffect 直接 return
  if(!activeEffect)return
  //根据target 从"桶"中取depsMap 它也是一个 Map类型 类型 key =>effects
  let depsMap = bucket.get(target)
  //如果不存在depsMap 新建一个 Map 与target关联
  if(!depsMap){
    bucket.set(target,(depsMap= new Map()))
  }
  //再根据key从depsMap取 deps,它是一个 Set 类型
  //里面存着当前 key 相关的副作用函数 effects
  let deps = depsMap.get(key)
  //如果 deps 不存在新建一个 Set 类型与 key 关联
  if(!deps){
    depsMap.set(key,(deps = new Set()))
  }
  //最后将activeEffect添加到桶中
  deps.add(activeEffect)
}

//触发副作用函数
function trigger(target,key){
  //根据target 从桶中取出depsMap
  const depsMap = bucket.get(target)
  if(!depsMap)return 
  //根据key可以取副作用函数effects
  const effects = depsMap.get(key)
  //执行副作用函数
  effects && effects.forEach(fn=>{
    if(fn.options.scheduler){
      fn.options.scheduler(fn)
    }else{
      fn()
    }
  })
}

//用一个全局变量存储被注册的副作用函数
let activeEffect

function effect(fn,options){
  activeEffect = fn
  fn.options = options
  fn()
}

//执行副作用函数
effect(()=>{
    console.log('effect1',data. age)
  },
  {
    scheduler(fn){
      setTimeout(fn)
    }
  }
)
data.age++

console.log('结束了')


// effect(()=>{
//   console.log('effect1',data.age)
// })


// setTimeout(() => {
//   data.age =520
// }, 2000);



