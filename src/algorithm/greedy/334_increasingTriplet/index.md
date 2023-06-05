---
group:
  title: 贪心
  path: /algorithm/greedy
---

# [334. 递增的三元子序列](https://leetcode.cn/problems/increasing-triplet-subsequence/)

## 思路

和[300_lengthOfLIS](../hot100/300_length-of-lis)一样的思路；

f[i]表示长度为 i 的子序列的末尾最小值；f 最长为 3，所以可以用指针 first, second 表示; 遍历过程中只要有大于 second 的元素，并且 first, second 不为空，那就可以把这个元素压入 f 数组了，长度为 3 说明本题有答案。

## 代码

<code src='./index.tsx'></code>
