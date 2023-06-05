---
group:
  title: 动态规划
  path: /algorithm/dp
---

# [647. 回文子串](https://leetcode.cn/problems/palindromic-substrings/)

## 思路

就是最大回文子串的`dp`数组，`dp`中的`true`的个数就是答案。

再巩固一遍对于斜角遍历的递推，需要有`2n+1`个初始值，因为有`2n+1`个方向。

## 代码

<code src='./index.tsx'></code>
