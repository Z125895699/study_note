const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

const resolvePromise = (p,result, resolve, reject) => {
  // 判断是不是自己，如果是调用reject
  if (p === result) {
    reject(new Error("Chaining cycle detected for promise #<Promise>"));
  }

  // 判断result是不是promise
  if (result instanceof myPromise) {
    result.then(resolve, reject);
  } else {
    resolve(result);
  }
};


// 实现一个promise
export default class myPromise{
  constructor(fn){
    // 这里的fn其实就是new Promise传递的函数
    fn(this.resolve,this.reject)
  }

  //初始化状态以及value
  status = PENDING
  value = null
  // 新增记录成功与失败回调的参数,修改为数组
  fulfilledCallback = [];
  rejectedCallback = [];

  resolve=(value)=>{
    if(this.status === PENDING){
      // 当调用resolve时修改状态成fulfilled，同时记录成功的值
      this.status = FULFILLED
      this.value = value
      // 新增成功回调的调用
      while (this.fulfilledCallback.length) {
        this.fulfilledCallback.shift()?.(value);
      }
    }
  }

  reject=(reason)=>{
    if(this.status === PENDING){
      // 当调用reject时修改状态成rejected，同时记录失败的理由
      this.status = REJECTED
      this.value = reason
      // 新增失败回调的调用
      while (this.rejectedCallback.length) {
        this.rejectedCallback.shift()?.(reason);
      }
    }
  }

  then = (fulfilledFn,rejectedFn)=>{
    // 我们得在每次调用then时返回一个Promise
    const p = new myPromise((resolve,reject)=>{
      // 封装成功的微任务
      const fulfilledMicrotask = () => {
      // 创建一个微任务等待 promise2 完成初始化
      queueMicrotask(() => {
        // 获取成功回调函数的执行结果
        const result = fulfilledFn(this.value);
        // 传入 resolvePromise 集中处理
        resolvePromise(p, result, resolve, reject);
      });
    };
    // 封装失败的微任务
    const rejectedMicrotask = () => {
      // 创建一个微任务等待 promise2 完成初始化
      queueMicrotask(() => {
        // 调用失败回调，并且把原因返回
        const result = rejectedFn(this.value);
        // 传入 resolvePromise 集中处理
        resolvePromise(p, result, resolve, reject);
      });
    };
    const callbackMap = {
      [FULFILLED]: fulfilledMicrotask,
      [REJECTED]: rejectedMicrotask,
      // 针对异步问题，新增pending状态时记录并保存回调的操作
      [PENDING]: () => {
        this.fulfilledCallback.push(fulfilledMicrotask);
        this.rejectedCallback.push(rejectedMicrotask);
      },
    };
      callbackMap[this.status]();
    });
    return p
  }
}
