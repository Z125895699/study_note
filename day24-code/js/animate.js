function animate(obj, target, callback) {
    console.log(callback)
    //当我们不断地点击按钮 这个元素的速度会越来越快 因为开启了太多的定时器
    //解决方案就是 让我们只有一个定时器
    //先清除以前的定时器 只保留当前的定时器
    clearInterval(obj.timer)
    obj.timer = setInterval(function () {
        //每次都要重新计算步长 所以把步长值写到定时器里面
        //步长值要给它取整 不要出现小数
        let step = (target - obj.offsetLeft) / 10
        // 用三元表达式来判断步长大于0还是小于0  这里有个返回结果 需要重新赋值
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        //这里的obj.offsetLeft == target 如果写成>=就不会回来
        if (obj.offsetLeft == target) {
            //停止动画 本质就是停止定时器
            clearInterval(obj.timer)
            //回调函数写到定时器结束里面 等它结束再执行回调函数
            // if (callback) {
            //     callback()
            // }
            //如果左边为true 就执行右边代码 为false 就不执行
            callback && callback()
        }
        obj.style.left = obj.offsetLeft + step + 'px'
    }, 15)
}