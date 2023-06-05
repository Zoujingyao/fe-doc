/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  // console.log('rotate: ', matrix);
  const n = matrix[0].length;
  let temp: number;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = i; j < n - i - 1; j++) {
      // temp = m[3][0]
      temp = matrix[n - j - 1][i];
      // 将matrix[i][j]顺时针旋转
      // m[3][0] = m[3][3]
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
      // m[3][3] = m[0][3]
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
      // m[0][3] = m[0][0]
      matrix[j][n - i - 1] = matrix[i][j];
      // m[0][0] = temp
      matrix[i][j] = temp;
    }
  }
  // console.log('matrix: ', matrix);
}

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
