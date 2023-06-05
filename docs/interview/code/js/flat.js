function myFlat(arr, deep) {
  const res = [];
  arr.forEach((item) => {
    if (deep > 0 && Array.isArray(item)) {
      res.push(...myFlat(item, deep - 1));
    } else {
      res.push(item);
    }
  });
  return res;
}

function myFlatWithReduce(arr, deep) {
  return arr.reduce((pre, cur) =>
      deep > 0 && Array.isArray(cur) ? pre.concat(myFlatWithReduce(cur, deep - 1)) : pre.concat([cur])
    , []);
}

const arr = [1, [2, 3, [4, 5]], 1, 2, [6, 7]];
console.log('flat(arr, 1): ', myFlat(arr, 2));
console.log('flatWithReduce(arr, 1): ', myFlatWithReduce(arr, 2));
