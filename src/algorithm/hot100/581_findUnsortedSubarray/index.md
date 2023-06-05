---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [581. 最短无序连续子数组](https://leetcode.cn/problems/shortest-unsorted-continuous-subarray/?favorite=2cktkvj)

## 思路

这道题可以先构造出两个辅助数据：

- `leftLargest` 数组，`leftLargest[i]` 存放下标为`i`的元素左边最大的元素值；
- `rightSmallest` 数组，`rightSmallest[i]` 存放下标为`i`的元素右边最小的元素值；

构造出来后，对于 nums[i]，应该满足`leftLargest[i] <= nums[i] <= rightSmallest[i]`，否则就是需要重拍的元素。

## 代码

<code src='./index.tsx'></code>
