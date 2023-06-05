---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [207. 课程表](https://leetcode.cn/problems/course-schedule/?favorite=2cktkvj)

## 思路

有向无环图，拓扑排序。见胡凡-算法笔记 P426 页，复习过了。

用邻接表（Record<node, [nodes]>, key = node， val 等于 node 能到达的节点集合）和 inDegree(记录每个节点的入度) 总是把入度为 0 的节点放入队列，每次取出队首节点，删除由该点开始的边，指向的所有节点入度-1，如果由节点入度变为 0，放入队列；

当队列为空时，如果进过队列的元素刚好等于节点数，说明无环，否则就有环。

## 代码

<code src='./index.tsx'></code>
