export default () => {
  function numSquares_dfs(n: number): number {
    const squares: number[] = [];
    // 记录100以内的完全平方数
    for (let i = 1; i < 101; i++) {
      squares.push(Math.pow(i, 2));
    }

    // 返回squares中第一个大于x的元素下标
    function upper_bound(x: number, start: number, end: number): number {
      let low = start,
        high = end;
      let mid: number;
      while (low < high) {
        mid = Math.floor((low + high) / 2);
        if (squares[mid] <= x) {
          // 往右边继续
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return low;
    }

    let res: number = n;

    /**
     * @param sum：当前还需要拼的和
     * @param num：当前已经用的完全平方数个数
     * @param searchEnd: 上次搜索sum的upperBound，这次sum更少，可以复用
     */
    function dfs(sum: number, num: number, searchEnd: number) {
      // debugger;
      if (sum === 0) {
        res = Math.min(res, num);
        return;
      }
      const upperIdx = upper_bound(sum, 0, searchEnd);
      if (upperIdx === 1) {
        // 相当于只能用sum个1来拼了
        res = Math.min(res, num + sum);
        return;
      }
      // 依次以squares[0], ..., squares[upperIdx-1]继续往下搜索
      for (let i = 0; i < upperIdx; i++) {
        // 用squares[i]来拼
        dfs(sum - squares[i], num + 1, upperIdx);
      }
    }

    dfs(n, 0, squares.length - 1);
    return res;
  }

  function numSquares(n: number): number {
    const dp: number[] = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
      let minNumber = Number.MAX_VALUE;
      for (let j = 1; j * j <= i; j++) {
        // 用完全平方数j*j + sum-j*j拼起来
        minNumber = Math.min(minNumber, dp[i - j * j]);
      }
      dp[i] = minNumber + 1;
    }
    return dp[n];
  }

  console.log('279_numSquares: ', numSquares(52));

  return 'numSquares';
};
