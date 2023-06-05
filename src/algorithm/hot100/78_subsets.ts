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
