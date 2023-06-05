---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [394. 字符串解码](https://leetcode.cn/problems/decode-string/?favorite=2cktkvj)

## 思路

模拟题，用一个数字栈 numStack 和符号栈 letterStack 来模拟；

维护三个变量 isNumeric, curStr, curNum 分别存储之前是否为数字、当前字符串和当前数字；

从左到右依次遍历字符串：

- 如果是`[`: 之前肯定是数字，将当前拼接好的 curNum 压入数字栈，
- 如果是`]`: 取出数字栈栈顶元素 topNum，依次取出字符栈栈顶元素拼接成 topStr，直到遇到[，然后 topStr.repeat(topNum)后压入栈；
- 如果是数字：curStr 不为空就将其压入符号栈，否则 curNum 拼接当前数字；
- 如果是字母：curNum 不为空就将其压入数字栈，否则 curStr 拼接当前字符；

细节比较多，会用调试功能真重要。

## 代码

<code src='./index.tsx'></code>
