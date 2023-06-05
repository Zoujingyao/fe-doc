export default () => {
  function longestConsecutive(nums: number[]): number {
    // 数组先去重，然后作为哈希表，表示某个数是否存在；
    const numSet = new Set(nums);

    let curLen: number = 0;
    let longestLen: number = curLen;

    for (let i = 0; i < nums.length; i++) {
      // 跳过逻辑，如果当前数x-1存在，那么从x-1开始的连续序列长度总要比以x开始的连续序列长度长1；
      // 所以可以跳过x
      if (!numSet.has(nums[i] - 1)) {
        curLen = 1;
        for (let j = 1; j; j++) {
          if (numSet.has(nums[i] + j)) {
            curLen = j + 1;
          } else {
            break;
          }
        }
        longestLen = Math.max(curLen, longestLen);
      }
    }

    return longestLen;
  }

  const testNums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
  console.log(longestConsecutive(testNums));

  return 'longestConsecutive';
};
