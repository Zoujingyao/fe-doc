---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [139. 单词拆分](https://leetcode.cn/problems/word-break/?favorite=2cktkvj)

## 思路

【动态规划】

`dp[i]`表示以 i 结尾的字符子串能否由字典中的词构成；

初始条件：`dp[0] = true`;

递推条件，从左到右开始遍历字符，其下标为`i`，`dp[i]`是否为 true 取决于 i 之前是否存在一个下标`j`，满足`dp[j] = true`并且`str[j, i]`在字典中；

## 代码

<code src='./index.tsx'></code>
