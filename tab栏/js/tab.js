//tab对象
//切换 添加 删除 修改功能
let that
class Tab {
    constructor(id) {
        //获取元素
        that = this
        this.main = document.querySelector(id)
        this.add = this.main.querySelector('.tabadd')
        //li的父元素
        this.ul = this.main.querySelector('.fisrstnav  ul:first-child')
        //section的父元素
        this.fsection = this.main.querySelector('.tabscon')
        this.init()
    }


    //init 初始化操作让相关的元素绑定事件
    init() {
        //会再次获取li和section
        this.updateNode()
        this.add.onclick = this.addTab
        for (let i = 0; i < this.lis.length; i++) {
            //让每个li有索引号
            this.lis[i].index = i
            this.lis[i].onclick = this.toggleTab
            this.remove[i].onclick = this.removeTab
            //双击事件
            this.spans[i].ondblclick = this.editTab
            this.sections[i].ondblclick = this.editTab

        }
    }
    //动态添加元素 需要更新获取对应的元素
    //获取所有的li和section
    updateNode() {
        this.lis = this.main.querySelectorAll('li')
        this.sections = this.main.querySelectorAll('section')
        this.remove = this.main.querySelectorAll('.icon-guanbi')
        this.spans = this.main.querySelectorAll('.fisrstnav  li span:first-child')
    }
    //切换功能 
    toggleTab() {
        //得到li的索引号
        console.log(this.index)
        that.clearClass()
        this.className = 'liactive'
        //这里不能写this this指向lis 但是sections是onstructor里面的
        that.sections[this.index].className = 'conactive'
    }
    //清除所有的li和section
    clearClass() {
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].className = ''
            //这里的this 是指向调用者 切换功能里面的that
            this.sections[i].className = ''

        }
    }
    //添加功能 创建新的选项卡li和新的内容section  中  把创建的两个元素追加到相应的父元素中
    addTab() {
        that.clearClass()
        // 创建新的选项卡li和新的内容section 
        let random = Math.random()
        let li = '<li class="liactive"><span>测试1</span><span class="iconfont icon-guanbi"></span></li>'
        let section = `<section class="conactive">测试${random}</section>`
        // 创建的元素追加到相应的父元素中
        //按钮里面没有ul
        that.ul.insertAdjacentHTML('beforeend', li)
        that.fsection.insertAdjacentHTML('beforeend', section)
        //调用init
        that.init()
    }
    //删除功能
    removeTab(e) {
        //它的父元素有一个点击事件 阻止冒泡
        e.stopPropagation()
        //它的父亲有索引号 正是我们想要的
        let index = this.parentNode.index
        // console.log(index)
        //根据索引号删除li 和section
        that.lis[index].remove()
        that.sections[index].remove()
        //继续调用init
        that.init()
        //当我们删除的不是选定的li  原来的li的状态保持不变
        if (document.querySelector('.liactive')) return
        //当我们删除了选中状态的这个li的时候 让他的前一个li处于选定状态
        //可以让前面一个处于点击状态
        index--
        //手动调用点击事件
        that.lis[index] && that.lis[index].click()
    }
    //修改功能
    editTab() {
        // alexrt(11)
        //原来的文本框
        let str = this.innerHTML
        //双击禁止选中文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty()
        //生成文本框 把之前里面的内容作为文本框再次给这个span
        this.innerHTML = `<input type="text"/ value="${str}">`
        //获取文本框
        let input = this.children[0]
        // input.value = str
        input.select()   //文本框里的内容处于选定状态
        //当我们离开文本框 就把文本框的值给span
        input.onblur = function () {
            //这里的this指向input
            this.parentNode.innerHTML = this.value
        }
        //按下回车也可以把文本框里面的内容给span
        input.onkeyup = function (e) {
            if (e.keyCode === 13) {
                //手动调动表单失去事件 不要加on
                this.blur();
            }
        }
        // input.onkeyup = function (e) {
        //     if (e.keyCode === 13) {
        //         // 手动调用表单失去焦点事件  不需要鼠标离开操作
        //         this.blur();
        //     }
        // }

    }
}
new Tab('#tab')