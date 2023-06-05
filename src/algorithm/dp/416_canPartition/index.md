---
group:
  title: 动态规划
  path: /algorithm/dp
---

# [416. 分割等和子集](https://leetcode.cn/problems/partition-equal-subset-sum/)

## 思路

动态规划，经典完全背包问题，要多想题目能转化成什么熟悉的题目，本题就是能否从数组中取出若干个元素，使得价值（总和）为背包容量（所有元素和）的一半。

- dp 数组定义

设`dp[i][j]`表示从`nums[0: i]`中选择若干个元素（可以一个都不选），元素和能否为`j`；然后 dp 数组的大小是`n * (sum/2)`的;

- 初始化

对于`j = 0`的情况，从`nums[0: j]`中选择 0 个元素，元素和为 0，所以`dp[i][0] = true`;

对于`i = 1`的情况，只有`j = nums[i]`时，`dp[j][j] = true`，其他值都为`false`；

- 递推

对于当前新选择 nums[i]，只有选或者不选两种，是否能选还要满足下面的条件：

要考虑当前的元素`nums[i]`和`j`的大小：

- `j < nums[i]`: 那么只能不选择第`i`号元素，那么`dp[i][j] = dp[i-1][j]`;
- `j >= nums[i]`: 那么第`i`号元素可选可不选，选的话是`dp[i-1][j-nums[i]]`, 不选的话是`dp[i-1][j]`，只要有一个为`true`，`dp[i][j]`就为`true`;

## 代码

<code src='./index.tsx'></code>
