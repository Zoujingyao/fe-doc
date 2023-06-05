function singleNumber(nums: number[]): number {
  // 这种做法使用了O(n)的额外空间
  const set = new Set<number>();
  let cur;
  for (let i = 0; i <= nums.length; i++) {
    cur = nums[i];
    if (set.has(cur)) set.delete(cur);
    else set.add(cur);
  }
  return set.values().next().value;
}

function singleNumber_xor(nums: number[]): number {
  // 常数空间复杂度
  let single: number = 0;
  for (let i = 0; i <= nums.length; i++) {
    single ^= nums[i];
  }
  return single;
}

console.log(singleNumber_xor([3, 3, 1]));
