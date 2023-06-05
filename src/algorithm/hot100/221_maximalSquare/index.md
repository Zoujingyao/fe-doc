---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [221.最大正方形](https://leetcode.cn/problems/maximal-square/)

## 思路

动态规划。

本题可以用二维 dp 来做：

- dp[i][j]表示以(i, j)为右下角，全为 1 的最大正方形的边长，那么答案就是 dp 中最大元素的平方。
- 初始值：第 0 行和第 0 列 matrix 如果为 0，则 0，为 1 则 1；
- 递推：dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1 (if(matrix[i][j]='1'));

递推公式要多想想，以(i, j)往左上角画正方形，只和其左上方相邻的三个元素有关，剩余左上方的元素都在那相邻的三个元素中考虑了。

## 代码

<code src='./index.tsx'></code>
