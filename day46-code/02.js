const order1000 = (orderType, pay, stock) => {
  if (orderType === 1 && pay === true) {
    console.log('1000元定金预购, 得到500优惠卷');
  } else {
    order500(orderType, pay, stock);
  }
};
const order500 = (orderType, pay, stock) => {
  if (orderType === 2 && pay === true) {
    console.log('500元定金预购, 得到100优惠卷');
  } else {
    orderNormal(orderType, pay, stock);
  }
};
const orderNormal = (orderType, pay, stock) => {
  if (stock > 0) {
    console.log('普通购买');
  } else {
    console.log('库存不足');
  }
};
//没付定金会出现库存不足的情况
order1000(2, true, 500);
order1000(2, true, 0);
order1000(1, false, 0); // 输出：手机库存不足
module.exports = {order1000,order500,orderNormal}
