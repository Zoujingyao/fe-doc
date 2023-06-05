---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [53. 最大子数组和](<[https://leetcode.cn/problems/maximum-subarray/?favorite=2cktkvj](https://leetcode.cn/problems/maximum-subarray/?favorite=2cktkvj)>)

## 思路

目标是求出`d[n]`的每个元素，其中`d[i]`表示以下标 i 的元素结尾的最长连续子序列和。那么该题目的解就是数组`d`中最大的元素。

例如

```text
nums: 5 4 -1 7  8
d:    5 9  8 15 23
```

即`d[i] = max(d[i-1]+nums[i], nums[i])`，也就是以 i 结尾的最大连续子序列和要么就`nums[i]`一个元素，要么就接上`nums[i-1]`。

keywords: 动态规划

## 代码

```typescript
function maxSubArray(nums: number[]): number {
  const d: number[] = []; // d[i]表示以下标为i元素结尾的最大连续和
  let res = nums[0];
  d.push(res);
  let temp: number;
  for (let i = 1; i < nums.length; i++) {
    temp = d[i - 1] + nums[i];
    if (temp > nums[i]) {
      d.push(temp);
      res = Math.max(res, temp);
    } else {
      d.push(nums[i]);
      res = Math.max(res, nums[i]);
    }
  }
  return res;
}
```

优化：其实都不需要额外 O(n)空间的`d`数组，只需要维护好以上一个元素结尾最大的和即可，`d[i]`只和`d[i-1]`有关系，所有可以优化为只保留`pre`和`res`两个变量。

```typescript
function maxSubArray(nums: number[]): number {
  let pre = 0,
    res = nums[0];
  nums.forEach((num) => {
    pre = Math.max(num, pre + num);
    res = Math.max(res, pre);
  });
  return res;
}

console.log(maxSubArray1([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
```
