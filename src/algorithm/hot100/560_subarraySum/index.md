---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [560. 和为 K 的子数组](https://leetcode.cn/problems/subarray-sum-equals-k/?favorite=2cktkvj)

## 思路

连续子序列和往往要用到前缀和，可以用一个 map 记录每个前缀和出现的次数；

全局 res = 0;

从左到右遍历数组元素：

- `prefixSum += nums[i]`;
- 计算以当前元素为结尾的子序列和为 k 的个数，并更新 res，也就是`res += map.get(prefixSum - k)`; (因为从 0 到当前元素的连续子序列分为了两部分，一部分和是`prefixSum-k`，那右半部分的和就是`k`了；)
- 将当前前缀和的次数更新到 map 中：

## 代码

<code src='./index.tsx'></code>
