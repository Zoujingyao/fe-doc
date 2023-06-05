import React from 'react';

export default () => {
  function sortArray_mergeSort(nums: number[]): number[] {
    function merge(l1: number, r1: number, l2: number, r2: number) {
      // debugger;
      const len1 = r1 - l1 + 1;
      const len2 = r2 - l2 + 1;
      const arr = new Array(len1 + len2).fill(0);
      let p = 0,
        p1 = l1,
        p2 = l2;
      while (p1 <= r1 && p2 <= r2) {
        if (nums[p1] <= nums[p2]) {
          arr[p++] = nums[p1++];
        } else {
          arr[p++] = nums[p2++];
        }
      }
      while (p1 <= r1) arr[p++] = nums[p1++];
      while (p2 <= r2) arr[p++] = nums[p2++];

      // 合并后的数组填回数组
      for (let i = 0; i < arr.length; i++) {
        nums[l1 + i] = arr[i];
      }
    }

    // debugger;
    for (let step = 1; step <= nums.length; step *= 2) {
      for (let i = 0; i < nums.length; i += 2 * step) {
        // 每次将两个长度为step的数组进行合并
        const mid = i + step - 1;
        if (mid + 1 < nums.length) {
          // 存在右区间
          merge(i, mid, mid + 1, Math.min(i + 2 * step - 1, nums.length - 1));
        }
      }
    }

    return nums;
  }

  const nums = [5, 1, 1, 2, 0, 0];
  return (
    <div>
      <h1>347_topKFrequent</h1>
      <p>{`nums=${nums}, res=${sortArray_mergeSort(nums)}`}</p>
    </div>
  );
};
