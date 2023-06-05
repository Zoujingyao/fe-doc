---
group:
  title: 动态规划
  path: /algorithm/dp
---

# [337. 打家劫舍 III](https://leetcode.cn/problems/house-robber-iii/?favorite=2cktkvj)

## 思路

官方题解：

对于每个节点都可能选或者不选，所以令：

- `f(node)`表示选择`node`、满足题目的最大价值；
- `g(node)`表示不选择`node`、满足题目要求的最大价值；

递推：

- 如果`node`要偷，那么其左右孩子就不能偷，即`f(node) = g(node.left) + g(node.right) + node.val`;
- 如果不偷 node，那么其左右孩子可以偷可以不偷，即这四个值当中的最大值：`g(node) = max(f(node.left), g(node.left), f(node.right), g(node.right))`;

因为要先求出左右子节点的`g,h`值，所以采用后序遍历；`f`和`g`的值用`Map<TreeNode, number>`存储;

好厉害！

## 代码

<code src='./index.tsx'></code>
