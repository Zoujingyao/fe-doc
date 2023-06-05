export default () => {
  // （理解错误了）nums中的每个元素的范围都在[1, n]中，而不是这n+1个元素是1, 2, ..., n和一个重复的数
  function findDuplicate_Error(nums: number[]): number {
    const n = nums.length - 1;
    const sum = (n * (n + 1)) / 2;
    let res = 0;
    for (let i = 0; i <= n; i++) {
      res ^= nums[i];
    }
    for (let i = 1; i <= n; i++) {
      res ^= i;
    }
    return res;
  }

  function findDuplicate(nums: number[]): number {
    let cur: number;
    while (true) {
      cur = nums[0];
      if (nums[cur] === cur) return cur;
      // 交cur放在nums[cur]，nums[cur]和nums[0]交换
      [nums[0], nums[cur]] = [nums[cur], nums[0]];
    }
  }

  console.log('287_findDuplicate: ', findDuplicate([2, 2, 2]));

  return '287_findDuplicate';
};
