---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [114. 二叉树展开为链表](https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/?favorite=2cktkvj)

## 思路

我的思路是依次遍历节点`cur`，展开节点也同步进行：

- 如果有右节点`cur.right`：
  - 有左子节点`cur.left`
    - 找到左子节点最右的孙子节点`lowestRightNode`，把以`cur.right`为根的子树接在该孙子节点 lowestRightNode 后面，因为这样不会影响先序遍历的顺序，又能把一侧空出来；
    - 然后此时节点`cur`就只有左子树，没有右子树了，然后按照题目要求把左侧置空，所有`cur.right = cur.left, cur.left = null`;
  - 没有左子节点
    - 天然符合题目要求
- 没有右节点`cur.right`：
  - 直接把左子树放在右子树上；
  - 左子树置空；

这样遍历下来，每个节点的`left`都是`null`，没遍历完的未成链表的子树都在`right`；

所以需要一个找到某节点最右孙子节点的函数`getLowestRightNode`，循环一直往右下，直到到达空节点为止即可。

## 代码

<code src="./index.tsx"></code>
