class BD {
  //静态属性
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'

  constructor(executor) {
    this.status = BD.PENDING
    this.value = null
    this.callback = []
    //若在状态体里面有错误 抛给错误状态reject
    try {
      executor(this.resolve.bind(this), this.reject.bind(this))
    } catch (error) {
      this.reject(error)
    }
  }
  //成功方法
  resolve(value) {
    if (this.status === BD.PENDING) {
      this.status = BD.FULFILLED
      this.value = value
      setTimeout(() => {
        this.callback.map((callback) => {
          callback.onFulfilled(this.value)
        })
      })
    }
  }
  //失败方法
  reject(reason) {
    if (this.status === BD.PENDING) {
      this.status = BD.REJECTED
      this.value = reason
      setTimeout(() => {
        this.callback.map((callback) => {
          callback.onRejected(this.value)
        })
      })
    }
  }
  //onFulfilled和onRejected是两个函数   相当于value和reason两个函数
  then(onFulfilled, onRejected) {
    if (typeof onFulfilled != 'function') {
      onFulfilled = () => this.value
    }
    if (typeof onRejected != 'function') {
      onRejected = () => this.value
    }
    return new BD((resolve, reject) => {
      if (this.status === BD.PENDING) {
        // 注册回调函数then
        this.callback.push({
          onFulfilled: (value) => {
            try {
              let result = onFulfilled(value)
              if (result instanceof BD) {
                result.then(
                  (value) => {
                    resolve(value)
                  },
                  (reason) => {
                    reject(reason)
                  }
                )
              } else {
                resolve(result)
              }
            } catch (error) {
              reject(error)
            }
          },
          onRejected: (value) => {
            try {
              let result = onRejected(value)
              //then返回的是Promise
              if (result instanceof BD) {
                result.then(
                  (value) => {
                    resolve(value)
                  },
                  (reason) => {
                    reject(reason)
                  }
                )
              } else {
                //返回的是普通值
                resolve(result)
              }
            } catch (error) {
              reject(error)
            }
          },
        })
      }
      //promise的then  是异步任务  状态改变之后的值是通过onFulfilled和onRejected出来的
      //所以把它们放在定时器里面
      if (this.status === BD.FULFILLED) {
        setTimeout(() => {
          //若在then里面有错误 抛给onRejected 处理错误
          try {
            //如果为成功状态then  才会接到值
            // onFulfilled(this.value) 是让开始的Promise的成功状态值传到then
            let result = onFulfilled(this.value)
            if (result instanceof BD) {
              result.then(
                (value) => {
                  resolve(value)
                },
                (reason) => {
                  reject(reason)
                }
              )
            } else {
              resolve(result)
            }
          } catch (error) {
            reject(error)
          }
        })
      }
      if (this.status === BD.REJECTED) {
        setTimeout(() => {
          try {
            let result = onRejected(this.value)
            if (result instanceof BD) {
              result.then(
                (value) => {
                  resolve(value)
                },
                (reason) => {
                  reject(reason)
                }
              )
            } else {
              resolve(result)
            }
          } catch (error) {
            reject(error)
          }
        })
      }
    })
  }
}
