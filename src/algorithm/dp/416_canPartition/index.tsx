import React from 'react';

export default () => {
  function canPartition(nums: number[]): boolean {
    const n = nums.length;
    let maxVal = nums[0];
    let sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
      maxVal = Math.max(maxVal, nums[i]);
      sum += nums[i];
    }

    // 边界值
    if (sum % 2 === 1 || maxVal > sum / 2) {
      return false;
    }

    // 目标元素和，即背包容量
    const target = sum / 2;

    // dp数组，dp[i][j]表示能否从nums[0: i]中取出若干个元素，使其元素之和恰好等于j；
    const dp: boolean[][] = new Array(n).fill(0).map(() => new Array(target + 1).fill(false));

    // 初始化
    for (let i = 0; i < n; i++) {
      // 从[0, i]中选0个元素，元素和为0
      dp[i][0] = true;
    }
    // 从nums[0: 0]中选元素，只能选这一个，和为nums[0]，即dp[0][nums[0]] = true; 要么不选，dp[0][0]已经初始化过了;
    dp[0][nums[0]] = true;

    // 递推
    for (let i = 1; i < n; i++) {
      for (let j = 0; j <= target; j++) {
        if (nums[i] > j) {
          // 只能不选nums[i]
          dp[i][j] = dp[i - 1][j];
        } else {
          // 可选可不选
          dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];
        }
      }
    }
    return dp[n - 1][target];
  }

  const nums = [1, 5, 11, 5];
  return (
    <div>
      <h1>416_canPartition</h1>
      <p>{`nums=${nums}, res=${canPartition(nums)}`}</p>
    </div>
  );
};
