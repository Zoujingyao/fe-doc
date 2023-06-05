function minPathSum(grid: number[][]): number {
  let m = grid.length,
    n = grid[0].length;
  // res[i][j]表示位置(i, j)到右下角的最小路径和
  let res: number[][] = new Array(m).fill([]).map(() => new Array(n).fill(0));
  let lastI = m - 1,
    lastJ = n - 1;
  // 初始化最后一行
  for (let j = n - 1; j >= 0; j--) {
    if (j === n - 1) {
      res[lastI][j] = grid[lastI][j];
    } else {
      res[lastI][j] = grid[lastI][j] + res[lastI][j + 1];
    }
  }
  // 初始化最后一列
  for (let i = m - 1; i >= 0; i--) {
    if (i === m - 1) {
      res[i][lastJ] = grid[i][lastJ];
    } else {
      res[i][lastJ] = grid[i][lastJ] + res[i + 1][lastJ];
    }
  }
  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      // 从位置(i, j)到右下角的最小路径和 = grid[i][j] +
      // min(先向右走到(i, j+1)再到右下角的最小路径和， 先向下走到(i+1, j)再到右下角的最小路径和)
      res[i][j] = Math.min(res[i][j + 1], res[i + 1][j]) + grid[i][j];
    }
  }
  return res[0][0];
}

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ]),
);
