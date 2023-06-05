Array.prototype.flat = function (deep = 1) {
  let res = [];
  for (const p of this) {
    Array.isArray(p) && deep > 0 ? res.push(...p.flat(deep - 1)) : res.push(p);
  }
  return res;
};

Array.prototype.flatReduce = function (deep) {
  return this.reduce((pre, cur) => {
    return Array.isArray(cur) && deep > 0
      ? pre.concat(cur.flatReduce(deep - 1))
      : pre.concat([cur]);
  }, []);
};

function flat(arr, deep) {
  let res = [];
  for (let p of arr) {
    Array.isArray(p) && deep > 0 ? res.push(...flat(p, deep - 1)) : res.push(p);
  }
  return res;
}

function flatWithReduce(arr, deep) {
  return arr.reduce((pre, cur) => {
    return Array.isArray(cur) && deep > 0
      ? pre.concat(flatWithReduce(cur, deep - 1))
      : pre.concat([cur]);
  }, []);
}

const arr = [1, [2, 3, [4, 5]], 1, 2, [6, 7]];
console.log('flat(arr, 1): ', flat(arr, 1));
console.log('flatWithReduce(arr, 2): ', flatWithReduce(arr, 2));
console.log('arr.flat(1): ', arr.flat(1));

// console.log(arr.flat(2));

export default () => {
  return 'flat';
};
