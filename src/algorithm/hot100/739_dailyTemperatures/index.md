---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [739. 每日温度](https://leetcode.cn/problems/daily-temperatures/?favorite=2cktkvj)

## 思路

单调栈（适合找某个元素左边或者右边第一个大的或者小的数字）；

从左到右遍历数组 i：

- 不断出栈，直到栈顶元素比当前元素大，
  - 每个栈顶元素右侧第一个更大的数就是 nums[i]，本题要求第几天，则下标之差；
- 该元素下标入栈；

这种相当于暂时找不到解的先攒起来，等有大的再依次看是不是它的答案。

## 代码

<code src='./index.tsx'></code>
