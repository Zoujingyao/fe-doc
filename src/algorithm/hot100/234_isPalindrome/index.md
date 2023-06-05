---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [234. 回文链表](https://leetcode.cn/problems/palindrome-linked-list/?favorite=2cktkvj)

## 思路

遍历第一遍记录链表长度，然后第二遍遍历的时候把前一半链表元素压入栈，遍历后一半的时候每次从栈从弹出一个元素进行对比，如果有不同就不是回文。

注意考虑长度为奇数和偶数时的区别。

## 代码

<code src='./index.tsx'></code>
