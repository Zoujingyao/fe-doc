---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [78. 子集](https://leetcode.cn/problems/subsets/)

## 思路

和[46. permute](./046_permute.md)基本框架都一致。深搜，状态是当前遍历到的元素下标`curIndex`和当前的列表`path`；

搜索过程：依次遍历元素，当前元素有加入列表或不加入列表两个分支。

边界：`curIndex === nums.length`，即遍历完所有的元素了。

## 代码

```typescript
function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  const len = nums.length;
  if (len === 0) {
    return res;
  }

  function dfs(curIndex: number, path: number[]) {
    if (curIndex === len) {
      res.push(path);
      return;
    }
    dfs(curIndex + 1, path);
    dfs(curIndex + 1, path.concat(nums[curIndex]));
  }

  dfs(0, []);
  return res;
}

console.log(subsets([1, 2, 3]));
```
