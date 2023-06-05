export default () => {
  function maxProduct(nums: number[]): number {
    let res: number = nums[0];
    // dp_max[i]表示以i结尾的子连续序列的最大乘积
    const dp_max: number[] = [res];
    // dp[i]_min表示以i结尾的子连续序列的最小乘积
    const dp_min: number[] = [res];
    for (let i = 1; i < nums.length; i++) {
      dp_max.push(Math.max(nums[i], dp_max[i - 1] * nums[i], dp_min[i - 1] * nums[i]));
      dp_min.push(Math.min(nums[i], dp_max[i - 1] * nums[i], dp_min[i - 1] * nums[i]));
      res = Math.max(res, dp_max[i]);
    }
    return res;
  }

  console.log(maxProduct([2, 3, -2, 4]));

  return 'maxProduct';
};
