---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [406. 根据身高重建队列](https://leetcode.cn/problems/queue-reconstruction-by-height/)

## 思路

本题是要把大家排队的顺序找出来，使得每个人都满足[h_i, k_i]，即前面身高大于等于 h_i 的人有 k_i 个。

有一个关键点要想清楚就是一个人前面占了多少比他矮的都无所谓，不影响它的 k_i 值；所以我们按照身高从高到低开始插入合适的位置，因为对于一个身高为 4 的人来说，只要大于 4 的站好了，就把他排在第四位就行了。

例如对于`peoples = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]`这个测试用例来说：

- 首先根据身高降序，k_i 升序排列（相同身高的第二个值大的肯定排后面，很容易理解），得到：

`peoples = [[7, 0], [7, 1], [6, 1], [5, 0], [5, 2], [4, 4]]`

- res 数组存放重排后的队列；
- 从左到右遍历 peoples，依次将每个元素 people 插入到 res 中第 people[1]号位置中；

## 代码

<code src='./index.tsx'></code>
