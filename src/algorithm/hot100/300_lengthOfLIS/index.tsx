export default () => {
  function lengthOfLIS(nums: number[]): number {
    const dp: number[] = new Array(nums.length).fill(1);
    let res: number = 0;
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
        if (nums[j] < nums[i]) {
          dp[i] = Math.max(dp[j] + 1, dp[i]);
        }
      }
      res = Math.max(res, dp[i]);
    }
    return res;
  }

  console.log('300_lengthOfLIS: ', lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));

  return '300_lengthOfLIS';
};
