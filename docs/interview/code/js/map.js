Array.prototype.myMap = function (callback) {
  // 排除回调非函数情况
  if (typeof callback !== 'function') {
    throw new TypeError(`${callback} is not a function.`);
  }
  // 排除this为非可迭代对象情况
  if (this === null || typeof this[Symbol.iterator] !== 'function') {
    throw new TypeError(`${this} isn't iterable.`);
  }
  // 将可迭代对象转换成数组
  const res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i], i, this));
  }
  return res;
};

const arr = [
  1,
  2,
  3,
  null,
  function hello() {
    console.log('hello');
  },
  undefined,
];
// console.log('test1: ', arr.myMap(2));

const test2 = 1;
// console.log('test2: ', test2.myMap((item) => console.log(item)));

const res = arr.myMap((ele, index, arr) => {
  return ele * 2;
});
console.log(res);

console.log(arr.map((item) => item * 2));
