---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [300. 最长递增子序列](https://leetcode.cn/problems/longest-increasing-subsequence/?favorite=2cktkvj)

## 思路

【动态规划】

`dp[i]`表示以`i`结尾的子序列最大的连续子序列长度。初始值：`dp[0] = 1`; 递推：`dp[i] = max(d[j]) + 1`, 其中(`j < i && nums[j] < nums[i]`)

【贪心 + 二分】

我的思路太局限了，要多看题解。

这题用动态规划确定`dp[i]`时和`dp[0~i]`都有关，所以复杂度是`O(n^2)`;

有更好的办法，能不能把确定`dp[i]`的过程缩短到`logn`呢？

> 如果我们要使上升子序列尽可能的长，则我们需要让序列上升得尽可能慢，因此我们希望每次在上升子序列最后加上的那个数尽可能的小。

那么我们设 f[i]表示长度为 i 的子序列中末尾最小值；然后遍历 nums 时，更新 f；`这题的答案就是f的长度`，这个不好想到。

对于 nums = [1, 3, 5, 2]; 遍历每个元素：

- 1: f[1] = 1;
- 3: f[2] = 3; (3 比 f 最后一位大，可以放在最后构成最长的上升子序列，目前能构成的长度为 2 的子序列只有 1,3，末尾数为 3)；
- 5：f[3] = 5; （同上）
- 2: 当遇到小于 f 最后一位的数时，就说明能够更新 f 了，二分查找 2 应该放在 f 中的位置，也就是替代 3，现在 f = [1, 2, 5];

遍历完了最后 f 的长度为 3，答案就是 3；为什么成立，因为本来 1，3，5 是最终答案的，但是 2 比 3 小，放在这里也不影响数组中确实存在一个长度为 3 的序列 1, 3, 5；而且万一后面还有的话，保证第二位更小是 2 的话，后面更有可能能接更长。就贪心在这里。

## 代码

<code src='./index.tsx'></code>
