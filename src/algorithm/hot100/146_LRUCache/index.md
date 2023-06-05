---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [146. LRU 缓存](https://leetcode.cn/problems/lru-cache/?favorite=2cktkvj)

## 思路

在内存满了的情况下要决定哪个数据被挪出去，这个在操作系统 LRU 页面置换课后作业中记录过[博客](https://blog.csdn.net/qq_40486952/article/details/105752631) ；

主要思路就是每次访问一个新页面都把它 push 进数组 visitOrder，然后内存满了就从后往前逆向扫描 visitOrder 数组，最后一个出现了还在内存中的数就是要挪出去的数；它是最近最久没访问的；

这样实现的代码性能很差，内存用的也多，每次查 LRUKey 都要新建 set；而且存了很多无用的节点，其实只应该保存 cache 中的；

官方题解给的方法是哈希表 + 双向链表; ![img.png](./img.png)

最近访问和插入的节点总是插入 tail 前，这样 head 后面就是最近最久未使用的节点；

## 代码

<code src='./index.tsx'></code>
