---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [437. 路径总和 III](https://leetcode.cn/problems/path-sum-iii/?favorite=2cktkvj)

## 思路

深度优先搜索，先序遍历，遍历的时候记录当前节点到根节点的和，即前缀和；

然后遍历到的节点就是前缀和数组中看是否存在一个值`x = curSum - targetSum`，有则说明有一条节点和为`targetSum`的路径，即：从前缀和为 x 节点的下一个节点 到 本节点。

## 代码

<code src='./index.tsx'></code>
