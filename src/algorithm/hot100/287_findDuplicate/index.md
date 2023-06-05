---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [287. 寻找重复数](https://leetcode.cn/problems/find-the-duplicate-number/?favorite=2cktkvj)

## 思路`

一开始以为是有 n+1 个数，分别是 1 到 n，然后有一个重复的数，那么就可以用异或的特性；

但这题是每个数的范围都在[1, n]，例如[2, 2, 2, 1, 4]；那可以用【原地哈希】来做，就是把下标当成 key，nums[key]当成 value；一直循环，将 nums[0]上的数 x 放在它该放的位置下标 x 中，也就是 swap(nums[0], nums[x]); 知道 nums[x]就等于 x，说明 x 重复，在位置 0 和 x 各出现了一次，可以退出循环。

## 代码

<code src='./index.tsx'></code>
