import React from 'react';

export default () => {
  function findTargetSumWays(nums: number[], target: number): number {
    const n = nums.length;
    let sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
      sum += nums[i];
    }

    // 边界值
    if ((sum - target) % 2 === 1 || sum < target) return 0;

    // 目标元素和，即背包容量
    const realTarget = (sum - target) / 2;

    // dp数组，dp[i][j]表示能否从nums的前i个数中即nums[0: i+1]中取出若干个元素，使其元素之和恰好等于j的组合数，即选取方案数；
    const dp: number[][] = new Array(n + 1).fill(0).map(() => new Array(realTarget + 1).fill(0));

    // 初始化，从前0个数中选0个元素，元素和为0
    dp[0][0] = 1;

    // 递推
    // debugger;
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j <= realTarget; j++) {
        dp[i][j] += dp[i - 1][j];
        if (nums[i - 1] <= j) {
          dp[i][j] += dp[i - 1][j - nums[i - 1]];
        }
      }
    }
    console.log('dp: ', dp);
    return dp[n][realTarget];
  }

  const nums = [1, 1, 1, 1, 1],
    target = 3;
  return (
    <div>
      <h1>494_findTargetSumWays</h1>
      <p>{`nums=${nums}, target=${target}, res=${findTargetSumWays(nums, target)}`}</p>
    </div>
  );
};
