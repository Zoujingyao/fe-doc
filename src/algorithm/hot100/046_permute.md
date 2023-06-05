---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [46. 全排列](https://leetcode.cn/problems/permutations/?favorite=2cktkvj)

## 思路

回溯，考虑 dfs 函数的状态:

- `curIndex`：当前下标为 curIndex 的位置待填数字
- `path`：`[0, curIndex-1]`当前已经选好了的排列；
- `vis`：`[0, n-1]`哪几号元素已经被使用过；

边界： curIndex = n，[0, n-1]号位置都填完了

搜索过程：考虑 curIndex 号位置填数，可以考虑 nums 中的每一个元素是否用过，没用过就可以填在该位置，然后考虑 curIndex+1 号位置填什么数

思考：

- [x] 代码中找到解时为什么必须拷贝出来`res.push([...path]);`，之前题目没拷贝为什么可以？

```text
本题是函数外部的数组，例如39题是函数的参数；
```

- [x] 如何把 path 和 vis 当成 dfs 的入参？

## 代码

```typescript
function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  const len = nums.length;
  if (len === 0) {
    return res;
  }
  let path: number[] = [];
  let vis: boolean[] = new Array(len).fill(false);

  function dfs(curIndex: number) {
    if (curIndex === len) {
      // 需要拷贝，否则都是[]，原因: 数组是引用
      res.push([...path]);
      return;
    }
    for (let i = 0; i < len; i++) {
      if (!vis[i]) {
        vis[i] = true;
        path.push(nums[i]);
        dfs(curIndex + 1);
        // 恢复状态
        path.pop();
        vis[i] = false;
      }
    }
  }

  dfs(0);
  return res;
}

console.log(permute([1, 3, 4]));
```

把 path, vis 作为 dfs 入参：

```typescript
function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  const len = nums.length;
  if (len === 0) {
    return res;
  }

  function dfs(curIndex: number, path: number[], vis: boolean[]) {
    if (curIndex === len) {
      res.push([...path]);
      return;
    }
    for (let i = 0; i < len; i++) {
      if (!vis[i]) {
        dfs(
          curIndex + 1,
          path.concat(nums[i]),
          vis.map((item, index) => {
            if (index === i) {
              return true;
            }
            return item;
          }),
        );
      }
    }
  }

  dfs(0, [], new Array(len).fill(false));
  return res;
}

console.log(permute([1, 3, 5]));
```

删去 vis 数组，通过数组的 indexOf 函数替代：

```typescript
function permute(nums: number[]): number[][] {
  let res: number[][] = [];
  const len = nums.length;
  if (len === 0) {
    return res;
  }

  function dfs(curIndex: number, path: number[]) {
    if (curIndex === len) {
      res.push([...path]);
      return;
    }
    for (let i = 0; i < len; i++) {
      if (path.indexOf(nums[i]) === -1) {
        dfs(curIndex + 1, path.concat(nums[i]));
      }
    }
  }

  dfs(0, []);
  return res;
}

// console.log(permute([1, 3, 5]));
```
