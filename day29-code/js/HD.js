class HD {
  //定义静态属性
  static PENDING = 'pending';
  static FULFILLED = 'fulfilled';
  static REJECTED = 'rejected';

  constructor(executor) {
    //起始的状态
    this.status = HD.PENDING;
    this.value = null;
    this.callback = [];
    // executor(this.resolve.bind(this), this.reject.bind(this))
    //函数体有问题 直接把状态变为拒绝
    try {
      //传递类方法  传入执行器executor
      // 用bind绑定this   resolve是被window调用 这时候this就指向HD
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }
  //成功或者拒绝的类方法
  resolve(value) {
    // console.log(this)
    //状态不能从成功状态改为拒绝状态    处于准备状态才可以改状态
    if (this.status === HD.PENDING) {
      //解决状态
      this.status = HD.FULFILLED;
      this.value = value;
      setTimeout(() => {
        //变成异步任务
        this.callback.map((callback) => {
          // 遍历读成功状态的值
          callback.onFulfilled(value);
        });
      });
    }
  }
  reject(reason) {
    if (this.status === HD.PENDING) {
      //拒绝状态
      this.status = HD.REJECTED;
      this.value = reason;
      setTimeout(() => {
        //变成异步任务
        this.callback.map((callback) => {
          //读失败状态的值
          callback.onRejected(reason);
        });
      });
    }
  }
  then(onFulfilled, onRejected) {
    //如果不传状态不会报错
    if (typeof onFulfilled !== 'function') {
      //then 穿透
      onFulfilled = () => {
        return this.value;
      };
    }
    if (typeof onRejected !== 'function') {
      onRejected = () => {
        return this.value;
      };
    }

    // then   返回新的promise给下面的then
    return new HD((resolve, reject) => {
      //没有加定时器为成功状态    加定时器为准备状态  过了定时器延时时间才有状态
      // console.log(this);   PENDING状态
      if (this.status === HD.PENDING) {
        //把onFulfille和onRejected方法压到数组里面   其实就是注册回调函数
        this.callback.push({
          onFulfilled: (value) => {
            try {
              let result = onFulfilled(value);
              if (result instanceof HD) {
                result.then(resolve, reject);
              } else {
                resolve(result);
              }
            } catch (error) {
              reject(error);
            }
          },
          onRejected: (value) => {
            try {
              let result = onRejected(value);
              if (result instanceof HD) {
                result.then(resolve, reject);
              } else {
                resolve(result);
              }
            } catch (error) {
              reject(error);
            }
          },
        });
      }
      //如果状态为成功才会执行
      if (this.status === HD.FULFILLED) {
        //把同步改成异步     放进任务队列里面
        setTimeout(() => {
          try {
            let result = onFulfilled(this.value);
            //如果第一个then返回的是new Promise
            if (result instanceof HD) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (error) {
            reject(error);
          }
        });
      }
      //如果状态为失败才会执行
      if (this.status === HD.REJECTED) {
        //处理错误
        setTimeout(() => {
          try {
            let result = onRejected(this.value);
            if (result instanceof HD) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (error) {
            reject(error);
          }
        });
      }
    });
  }

  //静态方法   Promise.resolve()和Promise.reject() 主要就是返回Promise
  static resolve(value) {
    return new HD((resolve, reject) => {
      if (value instanceof HD) {
        value.then(resolve, reject);
      } else {
        resolve(value);
      }
    });
  }
  static reject(reason) {
    return new HD((resolve, reject) => {
      if (reason instanceof HD) {
        reason.then(resolve, reject);
      } else {
        reject(reason);
      }
    });
  }

  //Promise.all 数组追加的方法 有一个失败返回失败状态 全部成功才返回成功状态
  static all(promises) {
    const values = [];
    return new HD((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then(
          (value) => {
            values.push(value);
            if (values.length === promises.length) {
              resolve(values);
            }
          },
          (reason) => {
            reject(reason);
          }
        );
      });
    });
  }

  //Promise.race 谁快用谁
  static race(promises) {
    return new HD((resolve, reject) => {
      promises.map((promise) => {
        promise.then(
          (value) => {
            resolve(value);
          },
          (reason) => {
            reject(reason);
          }
        );
      });
    });
  }
}
