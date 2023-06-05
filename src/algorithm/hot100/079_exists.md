---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [79. 单词搜索](https://leetcode.cn/problems/word-search/)

## 思路

宽度优先搜索 BFS，trick: 设定一个方向数组方便进行四个方向的搜索，注意要判断是否越界。

- 先遍历整个 board 数组找到和 word 第一个字母一样的元素作为搜索入口（可能有多个），开始进行搜索；

搜索过程 search，从`(x, y)`位置出发，找四周为`word[curIndex]`的元素继续搜素，四周都没有返回 false；需要包含三个状态：

- x
- y
- curIndex

边界：curIndex === word.length，完全匹配单词了;

注意单词不能重复，需要 vis 数组在进入下一层数组前标记当前元素已经使用，搜索后恢复状态。

ps: 感觉搜索题重要是想清楚自己的搜索逻辑，可能有很多写法，想好再写代码！

## 代码

```typescript
function exist(board: string[][], word: string): boolean {
  // 四个方向：右、左、下、上
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
```
