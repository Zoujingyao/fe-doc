---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [75. 颜色分类](https://leetcode.cn/problems/sort-colors/?favorite=2cktkvj)

## 思路

借鉴快速排序的 partition 思想，设置三个指针`p0, p1, cur`；因为只有三个元素，需要两个分界线`p0`和`p1`，使得：

- all element in `[0, p0)` is 0,
- all element in `[p0, cur)` is 1,
- all element in `(p2, len-1]` is 2,

然后 cur 从左到右遍历，判断目前指向的元素是否位置合适：

- 如果是 2 就要换到`p1`后面，所以将当前元素和`p2`指向元素交换后，让`p2`向左移动，`cur`移向下一个元素；
- 如果是 0 就要换到`p0`前面，所以将当前元素和`p0`指向元素交换后，让`p0`向右移动，`cur`移向下一个元素；
- 如果是 1，那么仅将`cur`移向下一个元素，因为 1 目前位置合适。

这题重要的就是确定好指针的意义，然后依次把元素放入到合适的范围内；

不清楚可以看[题解视频](https://leetcode.cn/problems/sort-colors/solution/yan-se-fen-lei-by-leetcode-solution/)。

## 代码

```typescript
/**
 * 交换nums数组中下标为idx1和idx2的元素
 */
function swap(nums: number[], idx1: number, idx2: number) {
  const [a, b] = [nums[idx1], nums[idx2]];
  nums[idx1] = b;
  nums[idx2] = a;
}

enum Color {
  RED,
  WHITE,
  BLUE,
}

/**
 Do not return anything, modify nums in-place instead.
 借鉴快速排序的思想，题解视频见：https://leetcode.cn/problems/sort-colors/solution/yan-se-fen-lei-by-leetcode-solution/
 */
function sortColors(nums: number[]): void {
  // all element in [0, p0) is 0, [p0, cur) is 1, (p2, len-1] is 2
  let p0 = 0,
    p1 = nums.length - 1,
    cur = 0;
  while (cur <= p1) {
    switch (nums[cur]) {
      case Color.RED:
        swap(nums, p0, cur);
        p0++;
        cur++;
        break;
      case Color.WHITE:
        cur++;
        break;
      case Color.BLUE:
        swap(nums, cur, p1);
        p1--;
    }
  }
  console.log('color: ', nums);
}

sortColors([2, 0, 2, 1, 1, 0]);
```
