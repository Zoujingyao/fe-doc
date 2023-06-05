function twoSum(nums: number[], target: number): number[] {
  const sorted_nums = [...nums].sort((a, b) => a - b);
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const res = sorted_nums[left] + sorted_nums[right];
    if (res === target) break;
    if (res < target) left++;
    else right--;
  }
  let resL, tempR, resR;
  resL = nums.findIndex((val) => val === sorted_nums[left]);
  tempR = nums.findIndex((val) => val === sorted_nums[right]);
  resR = tempR;
  if (tempR === resL)
    resR = nums.slice(resL + 1).findIndex((val) => val === sorted_nums[right]) + resL + 1;
  return resL < resR ? [resL, resR] : [resR, resL];
}

// 82%; 10%;
function twoSum2(nums: number[], target: number): number[] {
  const map = new Map();
  let resL: number, resR: number;
  nums.forEach((item, index) => {
    const val = target - item;
    if (map.has(val)) {
      resR = index;
      resL = map.get(val);
      return;
    }
    map.set(item, index);
  });
  return [resL!, resR!];
}

const nums = [-1, -2, -3, -4, -5]; // [-5, -4, -3, -2, -1]
const target = -8;
// console.log('res: ', twoSum2(nums, target));

const strs = ['1', '2', '3']; // [-5, -4, -3, -2, -1]

const res = strs.reduce((pre, cur, index) => {
  return pre + cur + (index === strs.length - 1 ? '' : ',');
}, '');
console.log('res: ', res);
