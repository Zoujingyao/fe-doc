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
