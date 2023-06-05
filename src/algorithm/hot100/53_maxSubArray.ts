function maxSubArray(nums: number[]): number {
  const d: number[] = []; // d[i]表示以下标为i元素结尾的最大连续和
  let res = nums[0];
  d.push(res);
  let temp: number;
  for (let i = 1; i < nums.length; i++) {
    temp = d[i - 1] + nums[i];
    if (temp > nums[i]) {
      d.push(temp);
      res = Math.max(res, temp);
    } else {
      d.push(nums[i]);
      res = Math.max(res, nums[i]);
    }
  }
  return res;
}

function maxSubArray1(nums: number[]): number {
  let pre = 0,
    res = nums[0];
  nums.forEach((num) => {
    pre = Math.max(num, pre + num);
    res = Math.max(res, pre);
  });
  return res;
}

console.log(maxSubArray1([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
