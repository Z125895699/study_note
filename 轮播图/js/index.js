window.addEventListener('load', function () {
  //获取元素
  let arrow_l = document.querySelector('.arrow-l')
  let arrow_r = document.querySelector('.arrow-r')
  let main = document.querySelector('.main')
  let mainWidth = main.offsetWidth
  //鼠标经过按钮显示
  main.addEventListener('mouseover', function () {
    arrow_l.style.display = 'block'
    arrow_r.style.display = 'block'
    clearInterval(timer)
  })
  //鼠标离开按钮消失
  main.addEventListener('mouseleave', function () {
    arrow_l.style.display = 'none'
    arrow_r.style.display = 'none'
    timer = setInterval(function () {
      //手动调用点击事件
      arrow_l.click()
    }, 2000)

  })
  //动态生成小圆圈 有几张图片就有几个小圆圈 图片是放在li里面的
  let ul = main.querySelector('ul')
  let ol = main.querySelector('.circle')
  console.log(ul.children.length)
  for (let i = 0; i < ul.children.length; i++) {
    //创建一个li
    let li = document.createElement('li')
    // 记录当前小圆圈的索引号 通过自定义属性来做
    li.setAttribute('index', i);
    // 把li插入到ol中
    ol.appendChild(li)
    li.addEventListener('click', function () {
      //干掉所有人
      for (let i = 0; i < ol.children.length; i++) {
        ol.children[i].className = ''
      }
      //留下自己
      this.className = 'current'
      // 得到小圆圈里面的li的索引号
      let index = this.getAttribute('index')
      // 当我们点击了某个小li 就要把这个li 的索引号给 num
      num = index
      // 当我们点击了某个小li 就要把这个li 的索引号给 circle
      circle = index
      // console.log(index)
      // animate(obj, target)
      // 移动图片的距离
      animate(ul, -index * mainWidth)
    })
  }
  //把ol里面的第一个li设置类名为current
  ol.children[0].className = 'current'
  //克隆第一张照片  深度拷贝
  let first = ul.children[0].cloneNode(true)
  //加到 ul 的后面
  ul.appendChild(first)
  // console.log(ul.children.length)
  //点击右侧按钮 图片滚动一张
  // circle控制小圆圈的播放
  let circle = 0
  let num = 0
  arrow_l.addEventListener('click', function () {
    //如果走到最后最后赋值的一张图片 此时我们的ul 要快速复原left为0
    //num=4 接下来就让num等于0
    if (num === ul.children.length - 1) {
      ul.style.left = 0
      num = 0
    }
    console.log(num)
    num++
    // console.log(num)
    animate(ul, -num * mainWidth)
    //点击右侧按钮 小圆圈跟随一起变化 可以再声明一个变量 控制小圆圈的播放
    circle++
    // 如果circle === 4 说明走到最后我们克隆的这张图片了 我们就复原
    if (circle === ol.children.length) {
      circle = 0
    }
    console.log(circle)
    // console.log(circle)
    //排他思想
    // 干掉其他人
    for (let i = 0; i < ol.children.length; i++) {
      ol.children[i].className = ''
    }
    //留下自己
    ol.children[circle].className = 'current'
  })
  //无缝滚动
  //左侧按钮
  arrow_r.addEventListener('click', function () {

    //如果走到最后最后赋值的一张图片 此时我们的ul 要快速复原left为0
    if (num === 0) {
      num = ul.children.length - 1
      // ul.style.left = -num * mainWidth + 'px'
      ul.style.left = `${-num * mainWidth}px`
    }
    num--
    console.log(num)
    animate(ul, -num * mainWidth)
    //点击右侧按钮 小圆圈跟随一起变化 可以再声明一个变量 控制小圆圈的播放
    //排他思想
    circle--
    // 如果circle < 0  说明是第一张图片，则小圆圈要改为第4个小圆圈（3）
    if (circle < 0) {
      circle = ol.children.length - 1
    }
    console.log(circle)
    // console.log(circle)
    //排他思想
    // 干掉其他人
    for (let i = 0; i < ol.children.length; i++) {
      ol.children[i].className = ''
    }
    //留下自己
    ol.children[circle].className = 'current'
  })

  //封装排他函数
  // function circleChange() {
  //     // 先清除其余小圆圈的current类名
  //     for (var i = 0; i < ol.children.length; i++) {
  //         ol.children[i].className = '';
  //     }
  //     // 留下当前的小圆圈的current类名
  //     ol.children[circle].className = 'current';
  // }
  //  自动播放
  let timer = setInterval(function () {
    //手动调用点击事件
    arrow_l.click()
  }, 2000)
})




