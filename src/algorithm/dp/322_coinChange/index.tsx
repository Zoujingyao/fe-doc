import React from 'react';

export default () => {
  // 超时
  function coinChange_dfs(coins: number[], amount: number): number {
    let res = Number.MAX_VALUE;

    function dfs(idx: number, sum: number, times: number) {
      if (sum === amount) {
        res = Math.min(res, times);
        return;
      }
      if (sum > amount || idx === coins.length) {
        return;
      }
      dfs(idx + 1, sum, times);
      dfs(idx, sum + coins[idx], times + 1);
    }

    dfs(0, 0, 0);
    return res === Number.MAX_VALUE ? -1 : res;
  }

  function coinChange(coins: number[], amount: number): number {
    const dp: number[] = [0];
    let temp;
    for (let i = 1; i <= amount; i++) {
      temp = Number.MAX_SAFE_INTEGER;
      for (let j = 0; j < coins.length; j++) {
        if (i - coins[j] >= 0) {
          temp = Math.min(temp, dp[i - coins[j]] + 1);
        }
      }
      dp.push(temp);
    }
    return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
  }

  const coins = [2];
  const amount = 3;
  return (
    <div>
      <h1>322_coinChange</h1>
      <p>{`coins=${coins}, amount=${amount}, res=${coinChange(coins, amount)}`}</p>
    </div>
  );
};
