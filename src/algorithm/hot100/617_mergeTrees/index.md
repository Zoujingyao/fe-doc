---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [617. 合并二叉树](https://leetcode.cn/problems/merge-two-binary-trees/?favorite=2cktkvj)

## 思路

刚做完[543](../543_diameterOfBinaryTree)，这题递归写起来感觉突然就顺手了。

也是先序遍历，带上两棵树目前遍历到的节点：

- 如果有一方节点为 null，返回另一个节点；
- 生成新节点，值为两个节点值之和；
- 递归遍历两个节点的左孩子，返回值作为新节点的左子树；
- 递归遍历两个节点的右孩子，返回值作为新节点的右子树；

## 代码

<code src='./index.tsx'></code>
