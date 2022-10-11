const order = (orderType, pay, stock) => {
  if (orderType === 1) {
    if (pay === true) {
      console.log('1000元定金预购, 得到500优惠卷');
    } else {
      if (stock > 0) {
        console.log('普通购买');
      } else {
        console.log('库存不足');
      }
    }
  } else if (orderType === 2) {
    if (pay === true) {
      console.log('500元定金预购, 得到100优惠卷');
    } else {
      if (stock > 0) {
        console.log('普通购买');
      } else {
        console.log('库存不足');
      }
    }
  } else if (orderType === 3) {
    if (stock > 0) {
      console.log('普通购买');
    } else {
      console.log('库存不足');
    }
  }
};
order(1, true, 1);
order(2, true, 0);
