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
