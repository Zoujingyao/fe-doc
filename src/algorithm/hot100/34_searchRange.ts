/**
 * @description 在非降序的数组中找到第一次出现target的下标
 */
function lowerBound(nums: number[], target: number): number {
  let l: number = 0,
    r: number = nums.length - 1,
    mid: number;
  while (l < r) {
    mid = Math.floor((l + r) / 2);
    if (target <= nums[mid]) {
      // 往左半部分找
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return nums[l] === target ? l : -1;
}

/**
 * @description 在非降序的数组中找到最后一个等于target的下标
 */
function upperBound(nums: number[], target: number): number {
  let l: number = 0,
    r: number = nums.length - 1,
    mid: number;
  // 下面的循环是upperBound的真正含义：在非降序的数组中找到第一个大于target的下标
  while (l < r) {
    mid = Math.floor((l + r) / 2);
    if (target >= nums[mid]) {
      // 往右半部分找
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  // l = r的时候要么找到了，l就是答案，要么就是到数组尾部了，需要特判
  if (nums[l] === target) return nums.length - 1;
  else if (nums[l] < target) return -1;
  else return nums[l - 1] === target ? l - 1 : -1;
}

function searchRange(nums: number[], target: number): number[] {
  // 两次二分，一次找下界, 一次找上界，是否能合并？
  return [lowerBound(nums, target), upperBound(nums, target)];
}

let nums1: number[] = [1];
console.log(searchRange(nums1, 1));
