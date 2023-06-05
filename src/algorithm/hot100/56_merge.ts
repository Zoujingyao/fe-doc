function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  const res: number[][] = [];
  let l: number = -1,
    r: number = -1;
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] >= l && intervals[i][0] <= r) {
      continue;
    }
    [l, r] = intervals[i];
    for (let j = i; j < intervals.length; j++) {
      if (r >= intervals[j][0]) {
        r = Math.max(r, intervals[j][1]);
      } else {
        break;
      }
    }
    res.push([l, r]);
  }
  return res;
}

console.log(
  merge([
    [1, 4],
    [2, 3],
  ]),
);
