---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [538. 把二叉搜索树转换为累加树](https://leetcode.cn/problems/convert-bst-to-greater-tree/?favorite=2cktkvj)

## 思路

右、根、左访问则是从大到小，二叉搜索中序遍历为升序遍历；

所以镜像中序遍历就能每次都把比当前节点大的访问完，用一个全局 curSum 记录当前访问过的节点的和，然后把当前节点值改成 curSum 即可。

## 代码

<code src='./index.tsx'></code>
