class Dep {
  constructor() {
    //添加订阅者
    this.subscribes = new Set();
  }
  //收集依赖
  depend() {
    if (activeEffect) {
      //添加到订阅者里
      this.subscribes.add(activeEffect);
    }
  }
  //更新视图
  notify() {
    this.subscribes.forEach((effect) => {
      effect();
    });
  }
}

//自动收集依赖
let activeEffect = null;
function watchEffect(effect) {
  activeEffect = effect;
  // dep.depend();
  // dep.addEffect(effect);
  //默认第一次执行一次 第二次才会有依赖收集
  effect();
  activeEffect = null;
}

//取出最外层的Map
const targetMap = new WeakMap();

//取不同的dep
function getDep(target, key) {
  //1、根据对象(target)取出相应的Map对象
  let depsMap = targetMap.get(target);
  //如果depsMap没有值
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }

  //2、根据key取出具体的dep对象
  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep();
    depsMap.set(key, dep);
  }
  return dep;
}

//vue2对raw进行数据劫持 Object.defineProperty进行劫持
function reactive(raw) {
  Object.keys(raw).forEach((key) => {
    //每个属性都有自己的dep 不能是重复的dep
    const dep = getDep(raw, key);
    let value = raw[key];

    Object.defineProperty(raw, key, {
      //获取数据的时候调用
      get() {
        //自动收集依赖
        dep.depend();
        return value;
      },
      //设置数据的时候调用
      set(newValue) {
        //修改的值不同才会通知订阅者更新视图
        if (value !== newValue) {
          value = newValue;
          //自动通知订阅者更新视图
          dep.notify();
        }
      },
    });
  });
  return raw;
}

const info = reactive({ counter: 100, name: 'coder' });

const foo = reactive({ height: 1.88 });

watchEffect(function () {
  console.log('effect1:', info.counter * 2, info.name);
});

watchEffect(function powerCounter() {
  console.log('effect2:', info.counter * info.counter);
});

watchEffect(function () {
  console.log('effect3:', foo.height);
});

// info.counter++;
// info.name = 'coder';
// dep.notify();

foo.height = 2.0;
// 通过Object.defineProperty的get和set自动收集依赖和通知订阅
