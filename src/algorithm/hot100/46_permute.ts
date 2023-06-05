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
      // 需要拷贝，否则都是[]，原因
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
