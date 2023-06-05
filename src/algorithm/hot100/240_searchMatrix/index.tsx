export default () => {
  function searchMatrixError(matrix: number[][], target: number): boolean {
    let row: number = -1,
      col: number = -1;
    // 遍历第一列，找到target在哪行row
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][0] === target) return true;
      if (matrix[i][0] < target) {
        row = i;
      } else {
        break;
      }
    }
    if (row === -1) return false;
    // 遍历第row行找target
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[row][j] === target) return true;
    }
    // 遍历第一行，找到target所在列col
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[0][j] === target) return true;
      if (matrix[0][j] < target) {
        col = j;
      } else {
        break;
      }
    }
    if (col === -1) return false;
    // 遍历第col列找target
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][col] === target) return true;
    }
    return false;
  }

  function searchMatrix(matrix: number[][], target: number): boolean {
    const m = matrix.length,
      n = matrix[0].length;
    let x = 0,
      y = n - 1;
    while (x < m && y >= 0) {
      if (matrix[x][y] === target) {
        return true;
      }
      if (matrix[x][y] > target) {
        // 往左边找
        --y;
      } else {
        // 往下找
        ++x;
      }
    }
    return false;
  }

  console.log(
    searchMatrix(
      [
        [1, 3, 5, 7, 9],
        [2, 4, 6, 8, 10],
        [11, 13, 15, 17, 19],
        [12, 14, 16, 18, 20],
        [21, 22, 23, 24, 25],
      ],
      13,
    ),
  );

  return 'searchMatrix';
};
