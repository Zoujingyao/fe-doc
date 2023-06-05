export default () => {
  function maxProfit(prices: number[]): number {
    // pre[i]表示i-2天最大收益
    const pre: number[] = new Array(prices.length).fill(0);
    // dp[i]表示i天卖出的最大收益
    const dp: number[] = new Array(prices.length).fill(0);
    let res: number = 0;
    for (let i = 0; i < prices.length; i++) {
      if (i >= 2) {
        pre[i] = Math.max(pre[i - 1], dp[i - 2]);
      }
      for (let j = 0; j < i; j++) {
        // j天买入，i天卖出
        if (prices[j] < prices[i]) {
          dp[i] = Math.max(dp[i], prices[i] - prices[j] + pre[j]);
        }
      }
      res = Math.max(res, dp[i]);
    }
    return res;
  }

  console.log('309_maxProfit: ', maxProfit([1, 2, 3, 0, 2]));

  return '309_maxProfit';
};
