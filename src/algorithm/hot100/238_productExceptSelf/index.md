---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [238. 除自身以外数组的乘积](https://leetcode.cn/problems/product-of-array-except-self/?favorite=2cktkvj)

## 思路

用前缀后缀和的思想。

例如：

- nums: [1, 2, 3, 4];
- prefix: [1, 2, 6, 24]; `prefix[i]`表示`nums[0] * nums[1] * ... * nums[i]`;
- suffix: [24, 24, 12, 4]; `suffix[i]`表示`nums[i] * nums[i+1] * ... * nums[n-1]`;

那么对于`res[i]`来说就是`prefix[i-1] * suffix[i+1]`;

进阶要求用常数空间复杂度，所以可以遍历一遍，对于当前的 i:

- 更新`prefixP = prefixP * nums[i-1]`; (保证`prefixP = nums[0] * nums[1] * ... * nums[i-1]`)
- `suffixP *= nums[n-i]`; (保证`suffixP = nums[n-i] * nums[n-i+1] * ... * nums[n-1])`;
- 然后更新`res[i] *= prefixP； res[n-i] *= suffixP`;

因为对于长度`n = 4`的`nums`来说：

| `x`       | 0           | 1           | 2           | 3           |
| --------- | ----------- | ----------- | ----------- | ----------- |
| `prefixP` | `1`         | `prefix[0]` | `prefix[1]` | `prefix[2]` |
| `suffixP` | `suffix[1]` | `suffix[2]` | `suffix[3]` | `1`         |

res = [1, 1, 1, 1];

- `i = 0，prefixP = suffixP = 1`; 更新`res = [1, 1, 1, 1]`;
- `i = 1, prefixP *= nums[0] = 1, suffixP *= nums[3] = 4`; 更新`res = [1, 1, 4, 1]`;
- `i = 2, prefixP *= nums[1] = 2, suffixP *= nums[2] = 12`; 更新`res = [1, 12, 8, 1]`;
- `i = 3, prefixP *= nums[2] = 6, suffixP *= nums[1] = 24`; 更新`res = [24, 12, 8, 6]`;

## 代码

<code src='./index.tsx'></code>
