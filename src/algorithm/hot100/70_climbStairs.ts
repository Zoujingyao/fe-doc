function climbStairs(n: number): number {
  // res = []; res[i]表示爬到第i阶台阶的方法数
  const res: number[] = [];
  res[1] = 1;
  res[2] = 2;
  for (let i = 3; i <= n; i++) {
    // 爬到第i级台阶的方法有两种：到第i-1级台阶后最后一步走一阶 和 到第i-2级台阶后最后一步走二阶
    // 即到第i级的方法数 = 到第i-1级的方法数 + 到i-2级的方法数
    res[i] = res[i - 1] + res[i - 2];
  }
  return res[n];
}

const n = 30;
console.log('res: ', climbStairs(n));
