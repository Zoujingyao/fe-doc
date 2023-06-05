Array.prototype._map = function (cb, thisBinding) {
  // 排除回调非函数情况
  if (typeof cb !== 'function') {
    throw new TypeError(`${cb} is not a function`);
  }
  // 排除this为非可迭代对象情况
  if (this == null || typeof this[Symbol.iterator] !== 'function') {
    throw new TypeError(`${this} is not iterable`);
  }
  // 将可迭代对象转换成数组
  const array = [...this];
  const result = [];
  // 执行遍历并回调
  for (let i = 0; i < array.length; i++) {
    result.push(cb.call(thisBinding, array[i], i, this));
  }
  return result;
};

const items = [1, 2, 3];
console.log(items._map((item) => item * 2));

export default () => {
  return 'map';
};
