---
group:
  title: 动态规划
  path: /algorithm/dp
---

# [322. 零钱兑换](https://leetcode.cn/problems/coin-change/?favorite=2cktkvj)

## 思路

### DFS

超时了，中等题递归肯定超时； dfs 的参数：

- `idx`：当前处理第 idx 个硬币；
- `sum`: 当前选择的硬币面值和；
- `times`: 当前选择的硬币数目;

边界条件：

- `sum > amount`：选择的硬币和已经超过要拼的面值`amount`了；
- `idx === coins.length`: 已经考虑完了所有的硬币；
- `sum === amount`: 找到了一个解，更新全局答案；

搜索过程，对于当前的 idx 号硬币:

- 要么不选继续往下一号搜索`dfs(idx+1, sum, times)`;
- 要么选择并继续搜索`dfs(idx, sum+coins[idx], times+1)`;

### 动态规划

其实和背包问题一样，取若干种物品使得价值最大，每个物品可以重复取；

令 dp[i]表示拼出面值 i 的最少硬币数目；

初始值：dp[0] = 0;

递推关系，假设只有一个面值 c 的硬币，那么 dp[i] = dp[i-c] + 1; 而硬币有 coins.length 个，所以 dp[i]就是尝试所有 c 的最小值。

递推过程：

- 第一层遍历 i，准备计算 dp[i]；
- 第二层遍历所有 coins，更新 dp[i] = min(dp[i], dp[i-coins[j]] + 1);

## 代码

<code src='./index.tsx'></code>
