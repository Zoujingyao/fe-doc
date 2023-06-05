---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [543. 二叉树的直径](https://leetcode.cn/problems/diameter-of-binary-tree/?favorite=2cktkvj)

## 思路

这道题是在遍历的过程中统计每个节点的深度；然后顺便计算`左右子树最大深度的两个节点形成的路径上的节点数res`，然后求全局 res 最大值。

可以想到直径就是 res 最大的路径上的边数目，就是节点数-1，即`res-1`;

感觉用最大路径节点数很巧妙，刚开始我在写的过程中，老要考虑左右子节点是不是为 null，再去更新最大直径，不直观，但是有节点数的概念就不需要做变换了。

## 代码

<code src='./index.tsx'></code>
