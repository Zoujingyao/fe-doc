---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [15. 三数之和](https://leetcode.cn/problems/3sum/)

## 思路

找一个三元组(a, b, c)，可以假设它们的出现次数就是 a, b, c。

- 先排序
- 依次将每个元素当成 a，然后去该元素后面用双指针找 b, c，满足`a+b+c = 0`;

## 代码

<code src='./index.tsx'></code>
