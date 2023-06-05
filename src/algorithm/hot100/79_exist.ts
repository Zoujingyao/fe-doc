function exist(board: string[][], word: string): boolean {
  // 四个方向：左、右、上、下
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  let vis: boolean[][] = new Array(board.length)
    .fill([])
    .map(() => new Array(board[0].length).fill(false));

  function isInRange(x: number, y: number): boolean {
    return x >= 0 && x < board.length && y >= 0 && y < board[0].length;
  }

  /**
   * 从(x, y)位置出发，找四周为word[curIndex]的元素继续搜素，四周都没有返回false；
   * @param x
   * @param y
   * @param curIndex
   */
  function search(x: number, y: number, curIndex: number): boolean {
    let isFind = false;
    if (curIndex === word.length) {
      return true;
    }
    let tempX: number, tempY: number;
    for (const [dx, dy] of directions) {
      tempX = x + dx;
      tempY = y + dy;
      if (!isInRange(tempX, tempY)) {
        continue;
      }
      if (board[tempX][tempY] === word[curIndex] && !vis[tempX][tempY]) {
        vis[tempX][tempY] = true;
        isFind = search(tempX, tempY, curIndex + 1);
        vis[tempX][tempY] = false;
        if (isFind) {
          break;
        }
      }
    }
    return isFind;
  }

  let res = false;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        vis[i][j] = true;
        res = search(i, j, 1);
        vis[i][j] = false;
        if (res) {
          return true;
        }
      }
    }
  }

  return false;
}

console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'SEE',
  ),
);
