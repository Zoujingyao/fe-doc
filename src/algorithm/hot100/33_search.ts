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
