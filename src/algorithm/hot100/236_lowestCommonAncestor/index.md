---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [236.二叉树的最近公共祖先](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/?favorite=2cktkvj)

## 思路

从 p 开始往上遍历，依次把父节点都标记为已访问（数组存），然后从 q 开始往上遍历，遇到已经访问过的就是了。

因为要往上遍历，所以需要先遍历一遍，把每个节点的父节点存在哈希表。

## 代码

<code src='./index.tsx'></code>
