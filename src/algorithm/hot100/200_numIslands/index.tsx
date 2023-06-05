export default () => {
  function numIslands(grid: string[][]): number {
    const inq: boolean[][] = new Array(grid.length)
      .fill(0)
      .map(() => new Array(grid[0].length).fill(false));
    const X: number[] = [0, 0, 1, -1];
    const Y: number[] = [1, -1, 0, 0];

    function check(x: number, y: number): boolean {
      if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) {
        // 越界
        return false;
      }
      if (grid[x][y] === '0' || inq[x][y]) {
        // 非陆地或已访问过
        return false;
      }
      return true;
    }

    type node = {
      x: number;
      y: number;
    };

    function BFS(x: number, y: number) {
      // debugger;
      let queue: node[] = [];
      queue.push({ x, y });
      inq[x][y] = true;
      let temp: node, tempX: number, tempY: number;
      while (queue.length) {
        temp = queue[0];
        queue = queue.slice(1);
        for (let i = 0; i < X.length; i++) {
          tempX = temp.x + X[i];
          tempY = temp.y + Y[i];
          if (check(tempX, tempY)) {
            queue.push({ x: tempX, y: tempY });
            inq[tempX][tempY] = true;
          }
        }
      }
    }

    let res: number = 0;

    // debugger;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === '1' && !inq[i][j]) {
          res++;
          BFS(i, j);
        }
      }
    }

    return res;
  }

  console.log(
    numIslands([
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1'],
    ]),
  );

  return 'numIslands';
};
