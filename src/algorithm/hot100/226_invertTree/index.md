---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [226. 翻转二叉树](https://leetcode.cn/problems/invert-binary-tree/)

## 思路

用镜像先序遍历，在访问节点的时候同步生成新节点，将左右孩子的访问结果当作新节点的右和左孩子，看源码吧。

## 代码

<code src='./index.tsx'></code>
