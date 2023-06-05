---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [64. 最小路径和](https://leetcode.cn/problems/minimum-path-sum/)

## 思路

和[62. 不同路径](./062_uniquePaths.md)的思想是一致的，动态规划。

假设`res[i][j]`表示位置`(i, j)`到右下角的最小路径和；由于只能往右或者往下走，所以：

从位置`(i, j)`到右下角的最小路径和 = `grid[i][j]` + min(先向右走到(i, j+1)再到右下角的最小路径和， 先向下走到(i+1, j)再到右下角的最小路径和),

即 `res[i][j] = grid[i][j] + min(res[i][j + 1], res[i + 1][j]);`；

初始值：

最后一列元素都只能往下走，所以等于当前位置的值 + 正下方位置的值；即`res[i][j] = grid[i][j] + res[i + 1][j]`；最后一行元素都只能往右走，所以等于当前位置的值 + 正右方位置的值；即`res[i][j] = grid[i][j] + res[i][j + 1]`；

所以递推过程是从下往上，从右往左的。

例如： grid:

|  1  |  3  |  1  |
| :-: | :-: | :-: |
|  1  |  5  |  1  |
|  4  |  2  |  1  |

那么初始化后的 res：

|  0  |  0  |  3  |
| :-: | :-: | :-: |
|  0  |  0  |  2  |
|  7  |  3  |  1  |

然后开始递推 res[1][1];

```text
res[1][1] = grid[1][1] + min(res[1][2], res[2][1]) = 5 + min(2, 3) = 7
```

|  0  |  0  |  3  |
| :-: | :-: | :-: |
|  0  |  7  |  2  |
|  7  |  3  |  1  |

## 代码

```typescript
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
```
