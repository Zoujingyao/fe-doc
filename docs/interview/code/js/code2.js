// let prefixSumWeightArr = new Array(5).fill(0);
// const weightArr = [1, 2, 2, 4, 5].map((item) => Math.pow(item, 2)).sort((a, b) => a - b);
// // 前缀和
// for (let i = 0; i < weightArr.length; i++) {
//   if (i === 0) {
//     prefixSumWeightArr[i] = weightArr[i];
//   } else {
//     prefixSumWeightArr[i] = weightArr[i] + prefixSumWeightArr[i - 1];
//   }
// }
// console.log(prefixSumWeightArr);

// 二分法找上届和下届

const prefixSumWeightArr = [1, 2, 2, 3, 3, 4, 5];

// 返回数组arr[l, r]中第一个大于等于x的元素下标
function lowerbound(l, r, x) {
  // debugger;
  let mid;
  while (l < r) {
    mid = Math.floor((l + r) / 2);
    if (x <= prefixSumWeightArr[mid]) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l;
}

function upperbound(l, r, x) {
  // debugger;
  let mid;
  while (l < r) {
    mid = Math.floor((l + r) / 2);
    if (x < prefixSumWeightArr[mid]) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l;
}

// const prefixSumWeightArr = [1, 2, 2, 3, 3, 4, 5];
console.log(
  upperbound(0, prefixSumWeightArr.length - 1, 4),
  lowerbound(0, prefixSumWeightArr.length - 1, 4),
);

// const queries = [1, 3, 7, 9, 15];
// for (let i = 0; i < queries.length; i++) {
//   let idx = lowerbound(0, prefixSumWeightArr.length - 1, queries[i]);
//   console.log(prefixSumWeightArr[idx] === queries[i] ? idx + 1 : idx);
// }
