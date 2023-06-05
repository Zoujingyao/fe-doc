---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [62. 不同路径](https://leetcode.cn/problems/unique-paths/)

## 思路

- 动态规划假设`res[i][j]`表示位置`(i, j)`到右下角的方法数；由于只能往右或者往下走，所以从位置`(i, j)`到右下角的方法数 = 先向右走到`(i, j+1)`再到右下角的方法数 + 先向下走到`(i+1, j)`再到右下角的方法，即 `res[i][j] = res[i][j + 1] + res[i + 1][j];`；

初始值：最后一列和最后一行都是 1;

递推方向，从右往左，从下到上;

- 组合数学

```text
从左上角到右下角的过程中，我们需要移动 m+n-2 次，其中有 m-1 次向下移动，n-1 次向右移动。因此路径的总数，就等于从 m+n-2 次移动中选择 m-1 次向下移动的方案数，
即组合数C(m+n-2, m-1)


作者：LeetCode-Solution
链接：https://leetcode.cn/problems/unique-paths/solution/bu-tong-lu-jing-by-leetcode-solution-hzjf/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

## 代码

```typescript
function uniquePaths(m: number, n: number): number {
  // res[i][j]表示位置(i, j)到右下角的方法数
  let res: number[][] = new Array(m).fill([]).map(() => new Array(n).fill(1));
  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      // 从位置(i, j)到右下角的方法数等于先向右走到(i, j+1)再到右下角的方法数 + 先向下走到(i+1, j)再到右下角的方法数
      res[i][j] = res[i][j + 1] + res[i + 1][j];
      console.log(res[i][j + 1], res[i + 1][j]);
    }
  }
  return res[0][0];
}

console.log(uniquePaths(3, 2));
```
