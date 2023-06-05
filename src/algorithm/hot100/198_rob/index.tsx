export default () => {
  function rob(nums: number[]): number {
    if (nums.length === 1) return nums[0];
    // 前天之前（包括前天）最大的盗窃值；
    let highestToDBY: number = nums[0];
    // dp[i]表示以i结尾的最大盗窃值；
    const dp: number[] = [nums[0], nums[1]];
    // 最大盗窃值，就是dp中的最大值；
    let res: number = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
      dp.push(highestToDBY + nums[i]);
      highestToDBY = Math.max(dp[i - 1], highestToDBY);
      res = Math.max(res, dp[i]);
    }
    return res;
  }

  console.log(rob([6, 3, 10, 8, 2, 10, 3, 5, 10, 5, 3]));
  return 'rob';
};
