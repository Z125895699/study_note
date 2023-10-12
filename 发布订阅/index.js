class EventBus{
  constructor(){
    console.log('自动调用');
    this.subscribers = {};
  }

  subscribe(event, callback) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }
    this.subscribers[event].push(callback);
  }

  unSubscribe(event,callback){
    if (this.subscribers[event]) {
      this.subscribers[event] = this.subscribers[event].filter(subscriber => subscriber !== callback);
    }
  }

  publish(event, data) {
    if(this.subscribers[event]){
      this.subscribers[event].forEach(callback => callback(data));
    }
  }
}

// 创建一个事件总线实例
const eventBus = new EventBus();

function eventHandler(data) {
  console.log('订阅事件',data);
}

eventBus.subscribe('test',eventHandler)

eventBus.publish('test','hello world')

// 取消订阅事件
eventBus.unSubscribe('test', eventHandler);
  