var name = '一尾流莺';
var obj = {
  name: 'warbler',
};

function foo() {
  console.dir(this);
  console.log(this.name);
  return 'success';
}

/**
 * Object()方法
 * 如果传入的是值类型 会返回对应类型的构造函数创建的实例
 * 如果传入的是对象 返回对象本身
 * 如果传入 undefined 或者 null 会返回空对象
 */
Function.prototype._call = function (ctx, ...args) {
  // 判断上下文类型 如果是undefined或者 null 指向window
  // 否则使用 Object() 将上下文包装成对象
  const ctxObj = ctx ? Object(ctx) : window;
  // this现在指向要调用的函数foo，ctxObj指向正确的上下文作用域obj
  // 那么给ctxObj新建一个属性指向要调用的函数，完成apply目的
  const funcKey = Symbol();
  ctxObj[funcKey] = this;
  // 立即执行一次
  const result = ctxObj[funcKey](...args);
  // 删除这个属性
  delete ctxObj[funcKey];
  // 把函数的返回值赋值给_call的返回值
  return result;
};

// 和apply比只有参数传递形式不同，apply是通过数组传的；
Function.prototype._apply = function (ctx, argsArr = []) {
  const ctxObj = ctx ? Object(ctx) : window;
  const funcKey = Symbol();
  ctxObj[funcKey] = this;
  const res = ctxObj[funcKey](...argsArr);
  delete ctxObj[funcKey];
  return res;
};

Function.prototype._bind = function (ctx, ...args) {
  // 下面的this就是调用_bind的函数,保存给_self
  const _self = this;
  // bind 要返回一个函数, 就不会立即执行了
  const newFn = function (...rest) {
    // 调用 call 修改 this 指向
    return _self.call(ctx, ...args, ...rest);
  };
  if (_self.prototype) {
    // 复制源函数的prototype给newFn 一些情况下函数没有prototype，比如箭头函数
    newFn.prototype = Object.create(_self.prototype);
    // Object.create() 方法用于创建一个新对象，使用现有的对象来作为新创建对象的原型（prototype）
  }
  return newFn;
};

foo();
foo._call(obj);
foo._apply(obj);
foo._bind(obj)();
