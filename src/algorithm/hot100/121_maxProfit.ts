function maxProfit(prices: number[]): number {
  let curMinPrice = prices[0];
  let res = 0;
  for (let i = 1; i <= prices.length; i++) {
    if (prices[i] < curMinPrice) curMinPrice = prices[i];
    else {
      // 保证curMinPrice是第i天前的
      if (prices[i] - curMinPrice > res) res = prices[i] - curMinPrice;
    }
  }
  return res;
}

console.log(maxProfit([1, 53, 5]));
