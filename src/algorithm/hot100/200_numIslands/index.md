---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [200. 岛屿数量](https://leetcode.cn/problems/number-of-islands/?favorite=2cktkvj)

## 思路

BFS；

遍历二维数组，如果当前元素是陆地，并且没被访问过，就以这个元素为起点像四周 BFS;

BFS 用队列实现，每次取出队首元素，然后检查其上下左右四个元素是否是陆地且没被访问过（没越界），检查通过了就放入队列；直到队列为空。

见胡凡-算法笔记 p288，复习过了。

本题还可以用并查集? TODO 复习并查集。

## 代码

<code src='./index.tsx'></code>
