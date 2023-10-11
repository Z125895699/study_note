class EventBus {
  constructor() {
    this.subscribers = {};
  }

  /**
   *  订阅
   * @param {*} event 事件名称
   * @param {*} callback  回调事件
  */
  subscribe(event, callback) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }
    this.subscribers[event].push(callback);
  }

  /**
   *  取消订阅
   * @param {*} event 
   * @param {*} callback 
   */
  unsubscribe(event, callback) {
    if (this.subscribers[event]) {
      this.subscribers[event] = this.subscribers[event].filter(subscriber => subscriber !== callback);
    }
  }

  /**
   * 发布事件
   * @param {*} event 
   * @param {*} data 
   */
  publish(event, data) {
    if (this.subscribers[event]) {
      this.subscribers[event].forEach(callback => {
        callback(data);
      });
    }
  }
}

// 创建一个事件总线实例
const eventBus = new EventBus();

// 订阅事件
function handleCustomEvent(data) {
  console.log('订阅事件', data);
}

eventBus.subscribe('custom-event', handleCustomEvent);

// 发布事件
eventBus.publish('custom-event', 'Hello, Pub-Sub!');

// 取消订阅事件
eventBus.unsubscribe('custom-event', handleCustomEvent);
