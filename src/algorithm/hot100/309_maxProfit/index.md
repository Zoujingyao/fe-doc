---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [309. 最佳买卖股票时机含冷冻期](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/?favorite=2cktkvj)

## 思路

【动态规划】需要两个数组:

- `dp[i]`表示第`i`天卖出股票的最大收益；
- `pre[i]`表示第`i`天要买入，目前的最大成本，因为有冷冻期，所以最晚要在 i-2 天卖出；显然`pre[i] = max(dp[0], dp[1], ..., dp[i-2])`。

递推公式： `dp[i] = max(dp[i], pre[j] + (prices[i] - prices[j]))`，要满足`j < i && prices[j] < prices[i]`;

官方题解是用多状态 dp 做的，也就是考虑当前股票的状态：持有、不持有（非冷冻期）、不持有（冷冻期）；TODO，用这种方法做一下。

## 代码

<code src='./index.tsx'></code>
