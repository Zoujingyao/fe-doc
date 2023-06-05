---
group:
  title: 分治
  path: /algorithm/divide-conquer
---

# [剑指 Offer II 077. 链表排序](https://leetcode.cn/problems/7WHec2/)

## 思路

大四面试的时候有一道题是“用链表实现快速排序”；当时没写出来，现在练习试试，用链表实现快速排序和归并排序。

快排只能用递归的方式写，但归并可以用递归（自顶向下）和非递归（自底向上）的方式写；对于链表来说，更适合用归并。

### 快排

```text
qs(l): listNode {
    p = l;
    smallerList = ... // 存放比p.val小的元素链表；
    largerList = ... // 存放比p.val大的元素链表;
    // 分治，分别对l1和l2进行快速
    l1 = qs(l1);
    l2 = qs(l2);
    return l1 -> p -> l2;
}
```

<code src='./qs.tsx'></code>

### 归并排序

<code src='./ms.tsx'></code>
