---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [56. 合并区间](https://leetcode.cn/problems/merge-intervals/)

## 思路

先对区间数组按照左边界的升序排序，然后依次遍历每一个区间，记录当前的左右边界`l, r`，如果`l`大于等于当前区间的左边界，那么说明是重叠的区间，就可以把当前的`r`更新到`max(r, 当前区间的右边界)`

否则就是新的区间。

例如：

```text
intervals = [[1,4],[4,5]]
```

初始全局的`l = -1, r = -1`，遍历第一个区间，发现其左边界 1 不在`[l, r] = [-1, -1]`内，所以更新新的全局左边界`l = 1`，新的全局右边界`r = 4`，然后遍历第二个区间，发现其左边界 4 在`[l, r] = [1, 4]`内，所以更新全局`r = max(r, 5) = max(4, 5) = 5`；所有区间都遍历完了，所以把`[l, r] = [1, 5]`记录到结果数组中。

## 代码

```typescript
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
```
