---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [198. 打家劫舍](https://leetcode.cn/problems/house-robber/?favorite=2cktkvj)

## 思路

动态规划，其中`dp[i]`表示以`i`结尾的最大盗窃值，那么本题答案就是 dp 中的最大元素；

- 初始值：`dp[0] = nums[0], dp[1] = nums[1]`(如果 len > 1);
- 递推公式：`dp[i] = max(dp[0], ..., dp[i-2]) + nums[i]`;

其中`max(dp[0], ..., dp[i-2])`也就是前天之前（包括前天）最大的盗窃值；可以用一个变量`highestToDBY`维护， 那么其初始值是 nums[0]，递推公式就是对于当前下标 i, highestToDBY = `max(highestToDBY, dp[i-2])`; (因为不能相邻，所以只要记录前天开始之前最大的 dp 值)；

## 代码

<code src='./index.tsx'></code>
