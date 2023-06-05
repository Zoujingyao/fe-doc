export default () => {
  /**
   Do not return anything, modify nums in-place instead.
   */
  function moveZeroes(nums: number[]): void {
    // [0, left)是符合规则的子序列，(left, right)都是0, [right, n)是等待处理的子序列；
    let left = 0,
      right = 0;
    const n = nums.length;
    while (right < n) {
      if (nums[right]) {
        if (left !== right) {
          [nums[left], nums[right]] = [nums[right], nums[left]];
        }
        left++;
      }
      right++;
    }
  }

  return '283_moveZeroes';
};
