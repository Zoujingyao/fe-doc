export default () => {
  function subarraySum(nums: number[], k: number): number {
    const map = new Map<number, number>();
    map.set(0, 1);
    let res = 0;
    let prefixSum = 0;
    for (let i = 0; i < nums.length; i++) {
      prefixSum += nums[i];
      res += map.get(prefixSum - k) || 0;
      map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }
    return res;
  }

  console.log('560_subarraySum: ', subarraySum([1, 1, 1], 2));

  return '560_subarraySum';
};
