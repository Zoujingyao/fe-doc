import React from 'react';

export default () => {
  function threeSum(nums: number[]): number[][] {
    const res: number[][] = [];
    let l, r, temp;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
        break; // 升序排列，当前元素大于0，不可能找到a+b+c=0;
      }
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue;
      }
      l = i + 1;
      r = nums.length - 1;
      while (l < r) {
        temp = nums[i] + nums[l] + nums[r];
        if (temp === 0) {
          res.push([nums[i], nums[l], nums[r]]);
          // 去重
          while (l < r && nums[l + 1] === nums[l]) {
            l++;
          }
          while (l < r && nums[r - 1] === nums[r]) {
            r--;
          }
          // 更新l, r指针
          l++;
          r--;
        } else if (temp < 0) {
          l++;
        } else {
          r--;
        }
      }
    }
    return res;
  }

  const nums = [-1, 0, 1, 2, -1, -4];
  return (
    <div>
      <h1>15_threeSum</h1>
      <p>{`nums=${nums}, res=${threeSum(nums)}`}</p>
    </div>
  );
};
