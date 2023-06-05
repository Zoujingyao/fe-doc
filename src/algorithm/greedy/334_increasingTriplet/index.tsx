export default () => {
  function increasingTriplet(nums: number[]): boolean {
    debugger;
    // 因为这里f长度最大为3，所以可以不用数组
    let first = nums[0],
      second = Number.MAX_VALUE;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > second) {
        return true;
      } else if (nums[i] > first) {
        second = nums[i];
      } else {
        first = nums[i];
      }
    }
    return false;
  }

  console.log('334_increasingTriplet: ', increasingTriplet([0, 4, 2, 1, 0, -1, -3]));

  return '334_increasingTriplet';
};
