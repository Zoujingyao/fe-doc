---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [32. 最长有效括号](https://leetcode.cn/problems/longest-valid-parentheses/?favorite=2cktkvj)

## 思路

可以用动态规划做：dp[i]表示以 i 结尾的最长有效符号串长度，如果 s[i]是左括号，dp[i] = 0，否则看 s[i-dp[i-1]-1]是否为左括号;

如果是可以更新 dp[i] = 2(和结尾的) + dp[i-1] + dp[i-dp[i-1]-2];

## 代码

<code src='./index.tsx'></code>
