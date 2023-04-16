var test = require('./02.js');
class Chain {
  constructor(fn) {
    this.fn = fn;
    this.nextNode = null;
  }
  setNextNode(fn) {
    return (this.nextNode = fn);
  }
  passRequest() {
    const res = this.fn.apply(this, arguments);
    if (res === 'toNextNode') {
      return (
        this.nextNode &&
        this.nextNode.passRequest.apply(this.nextNode, arguments)
      );
    }
    return res;
  }
}
const chainOrder1000 = new Chain(test.order1000);
const chainOrder500 = new Chain(test.order500);
const chainOrderNormal = new Chain(test.orderNormal);

chainOrder1000.setNextNode(chainOrder500);
chainOrder500.setNextNode(chainOrderNormal);

chainOrder1000.passRequest(1, true, 500); // 输出：1000 元定金预购，得到 500 优惠券
chainOrder1000.passRequest(2, true, 500); // 输出：500 元定金预购，得到 200 优惠券
chainOrder1000.passRequest(3, true, 500); // 输出：普通购买，无优惠券
chainOrder1000.passRequest(1, false, 0); // 输出：手机库存不足
