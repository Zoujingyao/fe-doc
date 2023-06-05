export default () => {
  function maximalSquare(matrix: string[][]): number {
    // dp[i][j]表示以(i, j)为右下角，所有元素都为1的最大正方形的边长
    const dp: number[][] = new Array(matrix.length)
      .fill(0)
      .map(() => new Array(matrix[0].length).fill(0));
    let res: number = 0;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[i][j] === '1') {
          if (!i || !j) {
            dp[i][j] = 1;
          } else {
            dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
          }
          res = Math.max(res, dp[i][j]);
        }
      }
    }
    // debugger;
    return Math.pow(res, 2);
  }

  console.log(
    maximalSquare([
      ['1', '0', '1', '0', '0'],
      ['1', '0', '1', '1', '1'],
      ['1', '1', '1', '1', '1'],
      ['1', '0', '0', '1', '0'],
    ]),
  );

  return 'maximalSquare';
};
