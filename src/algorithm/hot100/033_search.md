---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [33. 搜索旋转排序数组](https://leetcode.cn/problems/search-in-rotated-sorted-array/)

## 思路

一个可能是两截的升序数组，仍然可以采用二分，取到中间的结果后，就可以根据`nums[mid]`和`nums[l], nums[r]`的大小关系知道哪一半是有序的，对于有序的部分，如果 target 在这之间，那么缩小范围到这有序的半个数组范围内搜索；如果不在，那就去另一半继续二分。

## 代码

```typescript
function search(nums: number[], target: number): number {
  let n = nums.length;
  if (!n) return -1;
  let l = 0,
    r = n - 1,
    mid;
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) return mid;
    if (nums[l] <= nums[mid]) {
      // [0, mid]是有序的，数组中每个元素都不相同，nums[0] = nums[mid]表示左半部分只有一个元素
      if (nums[l] <= target && target < nums[mid]) {
        // 在[0, mid-1]内继续找
        r = mid - 1;
      } else {
        // 在[mid + 1, n-1]内继续找
        l = mid + 1;
      }
    } else {
      // [mid, n-1]是有序的
      if (nums[mid] < target && target <= nums[r]) {
        // 在[mid + 1, n-1]内继续找
        l = mid + 1;
      } else {
        // 在[0, mid - 1]内继续找
        r = mid - 1;
      }
    }
  }
  return -1;
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 7));
```
