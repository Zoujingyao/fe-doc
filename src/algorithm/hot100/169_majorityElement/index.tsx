export default () => {
  function majorityElement(nums: number[]): number {
    const threshold = Math.floor(nums.length / 2);
    const numToTimes = new Map();
    let tmp: number;
    for (let i = 0; i < nums.length; i++) {
      tmp = 1;
      if (numToTimes.has(nums[i])) {
        tmp += numToTimes.get(nums[i]);
      }
      numToTimes.set(nums[i], tmp);
    }
    for (const [key, val] of numToTimes.entries()) {
      if (val > threshold) return key;
    }
    return 0;
  }

  console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

  return 'majorityElement';
};
