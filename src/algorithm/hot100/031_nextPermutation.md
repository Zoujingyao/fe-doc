---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [31. 下一个排列](https://leetcode.cn/problems/next-permutation/?favorite=2cktkvj)

## 思路

为了找到规律，观察从小到大的序列：

| i = 0 | i = 1 | i = 2 | i = 3 | i = 4 |
| ----- | ----- | ----- | ----- | ----- |
| 1     | 2     | 3     | 4     | 5     |
| 1     | 2     | 3🌟   | 5     | 4     |
| 1     | 2     | 4     | 3🌟   | 5     |
| 1     | 2     | 4🌟   | 5     | 3     |
| 1     | 2     | 5     | 3🌟   | 4     |
| 1     | 2🌟   | 5     | 4     | 3     |
| 1     | 3     | 2     | 4🌟   | 5     |
| 1     | 3     | 2🌟   | 5     | 4     |
| 1     | 3     | 4     | 2🌟   | 5     |
| 1     | 3     | 4🌟   | 5     | 2     |
| 1     | 3     | 5     | 2🌟   | 4     |
| 1     | 3🌟   | 5     | 4     | 2     |

观察上述的序列可以发现为了找到下一个更大的序列，需要从后往前找到第一个升序的数字对的左数，也就是带星号的那个，这个数也是在按序列生成排列时深搜的当前点。并且**这个数后面的元素都是逆序排列的**。

这个数在当前位置 i 的所有排列已经生成结束了，下面这个位置应该放置比当前数大的数字，这时候可以考虑当前位置之前的数字都是固定的，那么新的当前位置的数字应该是从剩余的数字中找比当前数大，又是剩余数字范围中[i+1, n-1]中最小的。

12354 来说，从后面开始找到第一个非逆序排列的数字 3，123xx 的排列已经搜索完了，接着应该从 5 和 4 中选取比 3 大的，又是他们俩中最小的，也就是 4 来代替 3 的位置。变成 12453，相当于下一个序列是 124xx，而这个序列最小的应该是 xx 升序排列，所以要把[i+1, n-1]部分升序排序，注意[i+1, n-1]部分肯定是降序的，所以可以用双指针完成这部分。

看官方题解的描述更加清晰：

```text
注意到下一个排列总是比当前排列要大，除非该排列已经是最大的排列。我们希望找到一种方法，能够找到一个大于当前序列的新序列，且变大的幅度尽可能小。具体地：

我们需要将一个左边的「较小数」与一个右边的「较大数」交换，以能够让当前排列变大，从而得到下一个排列。

同时我们要让这个「较小数」尽量靠右，而「较大数」尽可能小。当交换完成后，「较大数」右边的数需要按照升序重新排列。这样可以在保证新排列大于原来排列的情况下，使变大的幅度尽可能小。

具体地，我们这样描述该算法，对于长度为 n 的排列 a：

首先从后向前查找第一个顺序对 (i,i+1)，满足 a[i] < a[i+1]。这样「较小数」即为 a[i]。此时 [i+1,n) 必然是下降序列。

如果找到了顺序对，那么在区间 [i+1,n) 中从后向前查找第一个元素 j 满足 a[i] < a[j]。这样「较大数」即为 a[j]。

交换 a[i] 与 a[j]，此时可以证明区间 [i+1,n) 必为降序。我们可以直接使用双指针反转区间 [i+1,n) 使其变为升序，而无需对该区间进行排序。

作者：LeetCode-Solution
链接：https://leetcode.cn/problems/next-permutation/solution/xia-yi-ge-pai-lie-by-leetcode-solution/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

## 代码

```typescript
/**
 * swap two number with index of minIndex, maxIndex in a array.
 */
function swapNumInArray(nums: number[], minIndex: number, maxIndex: number): void {
  nums.splice(minIndex, 1, nums.splice(maxIndex, 1, nums[minIndex])[0]);
}

/**
 * reverse the elements in nums[start, end]
 */
function reversePartOfArray(nums: number[], start: number, end: number): void {
  let i = start,
    j = end;
  while (i < j) {
    swapNumInArray(nums, i, j);
    i++;
    j--;
  }
}

/**
 * Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  if (nums.length === 1) return;
  let i = nums.length - 2;
  // 在[0, n-1]从右往左找到第一组正序的数字对
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  if (i >= 0) {
    // i = -1表示整个序列现在是逆序的
    // 在[i, n-1]从右往左找到第一个大于nums[i]的数
    let j = nums.length - 1;
    while (j >= 0 && nums[i] >= nums[j]) {
      j--;
    }
    // 交换nums[i]和nums[j]
    swapNumInArray(nums, i, j);
  }
  // 现在[i+1, n-1]一定是倒序排列的，直接翻转即可
  reversePartOfArray(nums, i + 1, nums.length - 1);
}
```
