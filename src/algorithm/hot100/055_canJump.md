---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [55. 跳跃游戏](https://leetcode.cn/problems/jump-game/?favorite=2cktkvj)

## 思路

可以维护一个数组 canJumpEnd, canJumpEnd[i]表示从位置 i 处能否跳到末尾。

然后我们可以从后往前遍历数组，看在当前位置能跳到的位置中是否有位置能跳到末尾，只要有一个位置能到达末尾，那么该位置也能跳到末尾；

例如：

```text
nums:      [2, 3, 0, 1, 4]
canJumpEnd:[            true]
```

最后一个位置已经在末尾了，所以初始化为 true；

考虑前一个位置，能跳最远的距离为 1，所以看当前位置后面的一个位置是否能到末尾，可以，所以该位置也可以：

```text
nums:      [2, 3, 0, 1,    4]
canJumpEnd:[         true, true]
```

继续考虑后面的：

```text
nums:      [2,    3,    0,    1,    4]
canJumpEnd:[true, true, false, true, true]
```

本题的结果即为`canJumpEnd[0]`。

## 代码

```typescript
function canJump(nums: number[]): boolean {
  let canJumpEnd: boolean[] = new Array(nums.length).fill(false);
  canJumpEnd[nums.length - 1] = true;
  for (let i = nums.length - 2; i >= 0; i--) {
    // 看在i处能跳到的位置中，如果有一个位置能到达末尾，那么该位置也能跳到末尾；
    for (let j = i; j < Math.min(i + nums[i] + 1, nums.length); j++) {
      if (canJumpEnd[j]) {
        canJumpEnd[i] = true;
        break;
      }
    }
  }
  return canJumpEnd[0];
}

console.log(canJump([3, 2, 1, 0, 4]));
```
