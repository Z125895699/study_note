const obj ={
  value:10
}

global.value = 42;
function getValue(){
  return this.value
}
console.log('global',getValue())
//改变了getValue的this指向
console.log('call',getValue.call(obj));  // 输出: 10
console.log('apply',getValue.apply(obj));  // 输出: 10
console.log('bind',getValue.bind(obj));  // 输出: 10

//手写 call
Function.prototype.myCall = function(context,...args){
  
  //防止不是函数调用myCall
  if (typeof this !== 'function') {
    throw new TypeError('Type Error');
  }

  //如果context为空,指向全局
  context = context || global

  // 给 context 添加一个独一无二的属性以避免覆盖原有属性
  const fnSymbol = Symbol()
  //将函数添加到context的一个对象上,函数名称就是fnSymbol
  context[fnSymbol] = this;

  // 执行函数
  const result = context[fnSymbol](...args);

   // 删除我们添加的属性
   delete context[fnSymbol];

   return result
}

console.log('myCall',getValue.myCall(obj));  // 输出: 10

Function.prototype.myAplly=function(context,args){
  //防止不是函数调用myCall
  if (typeof this !== 'function') {
    throw new TypeError('Type Error');
  }

  //如果context为空,指向全局
  context = context || global

  // 给 context 添加一个独一无二的属性以避免覆盖原有属性
  const fnSymbol = Symbol()
  //将函数添加到context的一个对象上,函数名称就是fnSymbol
  context[fnSymbol] = this;

  let result
  if(args){
    result = context[fnSymbol](args)
  }else{
    result = context[fnSymbol]()
  }

  // 删除我们添加的属性
  delete context[fnSymbol];

  return result
}

console.log('myAplly',getValue.myAplly(obj));  // 输出: 10


Function.prototype.myBind = function (context, ...args1) {
  if (typeof this !== 'function') {
    throw new TypeError('Type Error');
  }

  //保存原有函数
  const fnToBind = this;
  const fnBound = function (...args2) {
    // 当作为构造函数时，this 指向实例，将绑定函数的 this 指向该实例，以使得 this 可以访问从绑定函数继承来的成员
    // 当作为普通函数时，this 指向 window，将绑定函数的 this 指向 context
    return fnToBind.apply(this instanceof fnToBind ? this : context, args1.concat(args2));
  };
  
  // 维护原型关系
  if (this.prototype) {
    fnBound.prototype = Object.create(this.prototype);
  }

  return fnBound;
};
console.log('myBind',getValue.myBind(obj));  // 输出: 10
