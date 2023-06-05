---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [39. 组合总和](https://leetcode.cn/problems/combination-sum/?favorite=2cktkvj)

# 思路

TODO: 回溯和深搜的区别

又是 dfs 题目，重点还是确定 dfs 的参数和含义、边界、以及搜索过程。先对候选数组进行升序排序；

这题至少需要三个参数：

- curIndex: 当前搜索到给定数组的几号元素了；
- curSum: 当前选中的元素之和；
- curArr: 当前选中的元素组成的列表；

边界：

- `curSum >= target`，等于时找到了一个解；
- `curIndex >= length`，候选数组遍历完了；
- `curSum + candidates[curIndex] > target`，数组有序的情况下`candidates[curIndex]`是目前可选的最小的元素，如果选最小的都大于目标值，那么直接可以停止遍历了。

搜索过程：

- 跳过当前 curIndex 号元素;
- 选该元素 dfs(curIndex, curSum + candidates[curIndex], curArr.concat(candidates[curIndex]))，因为可以重复选，所以 curIndex 不变;

# 代码

## 官方写法

```typescript
/**
 * @description
 */
function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  candidates.sort();

  /**
   * @curIndex 当前搜索的元素下标，可以用candidates[curIndex]以及其后面的元素
   * @curSum 当前选中的元素总和
   * @curArr 当前选中的元素集合
   */
  function dfs(curIndex: number, curSum: number, curArr: number[]) {
    if (curSum > target || curIndex >= candidates.length) {
      // 边界
      return;
    }
    if (curSum === target) {
      // 找到一个解
      res.push(curArr);
      return;
    }
    // 不用当前元素
    dfs(curIndex + 1, curSum, curArr);
    if (curSum + candidates[curIndex] <= target) {
      // 用当前元素（满足一定条件才进入该分支）
      dfs(curIndex, curSum + candidates[curIndex], curArr.concat(candidates[curIndex]));
    }
  }

  dfs(0, 0, []);
  return res;
}

console.log(combinationSum([2, 3, 1], 4));
```

## 我的：排序 + 剪枝

```typescript
/**
 * @description
 */
function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  candidates.sort((a, b) => a - b);

  /**
   * @curIndex 当前搜索的元素下标，可以用candidates[curIndex]以及其后面的元素
   * @curSum 当前选中的元素总和
   * @curArr 当前选中的元素集合
   */
  function dfs(curIndex: number, curSum: number, curArr: number[]) {
    if (curSum === target) {
      // 找到一个解
      res.push(curArr);
      return;
    }
    if (curSum > target || curIndex >= candidates.length) {
      // 边界
      return;
    }

    if (curSum + candidates[curIndex] > target) {
      // 因为candidates已经是升序的，加剩余最小的元素还是比target大，后面不用遍历了，剪枝
      return;
    }
    // 用当前元素
    dfs(curIndex, curSum + candidates[curIndex], curArr.concat(candidates[curIndex]));
    // 不用当前元素
    dfs(curIndex + 1, curSum, curArr);
  }

  dfs(0, 0, []);
  return res;
}
console.log(combinationSum([3, 12, 9, 11, 6, 7, 8, 5, 4], 15));
```
