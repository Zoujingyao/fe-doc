---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [128. 最长连续序列](https://leetcode.cn/problems/longest-consecutive-sequence/?favorite=2cktkvj)

## 思路

就是暴力枚举；遍历每一个数`x`，看数组中有没有`x+1, x+2, ...x+j`；所以以 x 开始的最长连续序列长度就为`j+1`;

- 为了快速看数组中某个元素是否存在，可以用`set`存这些元素，顺便还去重了；
- 优化：不是每一个数`x`都值得去看，因为去看就是 x 当序列的第一个，那么如果`x-1`也存在，那么`x-1`开头的连续序列长度肯定比`x`开头的长`1`，因此如果`x-1`存在，`x`就可以跳过；

## 代码

<code src='./index.tsx'></code>
