---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [152. 乘积最大子数组](https://leetcode.cn/problems/maximum-product-subarray/?favorite=2cktkvj)

## 思路

动态规划；

有个类似的求最大连续子序列和，设`dp[i]`表示以 i 结尾的连续子序列的最大连续和 那么：

- 初始值：`dp[0] = nums[0]`;
- 递推：`dp[i] = Math.max(dp[i], dp[i-1] + nums[i])`;

但是这题求最大乘积，对于所有数据都是正数来说同样这样做没问题。

但 nums 中可能有负数，那么此时 dp[i]已经不满足【最优子结构】了，考虑序列：

`nums = [-2, 3, -4]`，那么按照最大连续子序列和的思路，`dp = [-2, 3, -4]，res = 3`;

，但很明显最大乘积应该是`(-2) * 3 * (-4) = 24`，也就是对于负数的处理不对劲。

对于负数来说，它肯定希望`dp[i-1]`是负数的连续子序列乘积，并且越小越好。

因此我们还需要维护一个`dp_min`，其中`dp_min[i]`表示以`i`未结尾的最大连续子序列乘积，原 dp 也可以改名为`dp_max`了，更符合此时的语境。

那么：

- 初始值：`dp_min[0] = dp_max[0] = nums[0]`
- 递推：
  - `dp_max[i] = Math.max(nums[i], dp_max[i-1] * nums[i], dp_min[i-1] * nums[i])`;
  - `dp_min[i] = Math.min(nums[i], dp_max[i-1] * nums[i], dp_min[i-1] * nums[i])`;

此时对于序列 nums = [-2, 3, -4]，就可以得到真正的 dp_max 了；

| x | 0 | 1 | 2 | | :----: | :-: | :-: | :-: | | nums | -2 | 3 | -4 | | dp_max | -2 | 3 | 24 | | dp_min | -2 | -6 | -4 |

## 代码

<code src='./index.tsx'></code>
