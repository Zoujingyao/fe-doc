function uniquePaths(m: number, n: number): number {
  // res[i][j]表示位置(i, j)到右下角的方法数
  let res: number[][] = new Array(m).fill([]).map(() => new Array(n).fill(1));

  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      // 从位置(i, j)到右下角的方法数等于先向右走到(i, j+1)再到右下角的方法数 + 先向下走到(i+1, j)再到右下角的方法数
      res[i][j] = res[i][j + 1] + res[i + 1][j];
      // console.log('res: ', res);
    }
  }
  return res[0][0];
}

console.log(uniquePaths(3, 3));
