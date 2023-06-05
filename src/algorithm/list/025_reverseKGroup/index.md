---
group:
  title: 链表
  path: /algorithm/list
---

# [25. K 个一组翻转链表](https://leetcode.cn/problems/reverse-nodes-in-k-group/)

## 思路

一个哨兵节点 dummyNode，初始时 dummyNode.next = head;

一个前驱节点 pre，总是指向处理完成的链表尾，初始时 pre = dummyNode;

两个节点 start, cur 分别指向下一段要处理的最长 k 的链表，注意让 cur 后面断开；

- 如果长度为 k，就翻转从 start 到 cur 这段链表，即 pre.next = reverseList(start, cur);
- 否则无需翻转，直接让 pre.next = start；

一个 next 节点，记录还没开始处理的后面链表头，即 next = cur.next; 记得更新 pre 到当前处理好的链表尾；

## 代码

<code src='./index.tsx'></code>
