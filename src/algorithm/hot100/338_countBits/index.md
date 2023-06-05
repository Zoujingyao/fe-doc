---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [338. 比特位计数](https://leetcode.cn/problems/counting-bits/?favorite=2cktkvj)

## 思路

第一次看到”你的代码无敌了“诶，有些大开心！

![img.png](./img.png)

我的思路：观察得到规律，另`bitsNum[i]`表示 i 的二进制表示中包含的 1 的数目；

可以想到所有满足 2 的幂次数`i`中的 1 的个数都是 1，后面拼接若干个 0，例如`i = 2, 4, 8, 16`;

而对于`x`来说，只要找到它前面的 2 幂次数，就知道 bitsNum[x]的值， `bitsNum[x] = bitsNum[base] + bitsNum[x - base]`；

例如先初始化`bitsNum = [0, 1]`, 那么`x = 3`时，前一个比`x`小的 2 的幂次数是 2，所以`bitsNum[3] = bitsNum[2] + bitsNum[1]`；

所以可以从左到右遍历`i`，并且记录当前二进制的长度`len = 1`、当前的`base = 2 ^ (len - 1)`;

- 如果这个数不是 2 的幂次数，那么`bitsNum[i] = bitsNum[base] + bitsNum[i - base]`;
- 否则：`bitsNum[i] = 1`；并更新`len`和`base`，`len++, base = 2 ^ (len - 1);`

## 代码

<code src='./index.tsx'></code>
