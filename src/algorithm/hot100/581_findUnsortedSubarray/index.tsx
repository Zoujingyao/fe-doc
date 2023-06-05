import React from 'react';

export default () => {
  function findUnsortedSubarray(nums: number[]): number {
    const leftLargest = new Array(nums.length).fill(-Infinity);
    const rightSmallest = new Array(nums.length).fill(Infinity);

    const cnt: number = 0;

    if (nums.length <= 1) return cnt;

    // debugger;
    let left = nums[0],
      right = nums[nums.length - 1];
    for (let i = 1; i < nums.length; i++) {
      leftLargest[i] = left;
      left = Math.max(left, nums[i]);
    }

    for (let i = nums.length - 2; i >= 0; i--) {
      rightSmallest[i] = right;
      right = Math.min(right, nums[i]);
    }

    console.log(leftLargest, rightSmallest);

    let start = -1,
      end = -1;
    for (let i = 0; i < nums.length; i++) {
      if (leftLargest[i] > nums[i] || nums[i] > rightSmallest[i]) {
        start = i;
        break;
      }
    }

    for (let i = nums.length - 1; i > 0; i--) {
      if (leftLargest[i] > nums[i] || nums[i] > rightSmallest[i]) {
        end = i;
        break;
      }
    }

    console.log(start, end);
    if (start === end && start === -1) return 0;
    return end - start + 1;
  }

  const nums = [0, 1, 2, 3, 5, 4, 6, 7, 8, 9];

  return (
    <div>
      <h1>581_findUnsortedSubarray</h1>
      <p>{`nums=${nums}, res=${findUnsortedSubarray(nums)}`}</p>
    </div>
  );
};
