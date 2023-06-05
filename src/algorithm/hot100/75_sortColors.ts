/**
 * 交换nums数组中下标为idx1和idx2的元素
 */
function swap(nums: number[], idx1: number, idx2: number) {
  const [a, b] = [nums[idx1], nums[idx2]];
  nums[idx1] = b;
  nums[idx2] = a;
}

enum Color {
  RED,
  WHITE,
  BLUE,
}

/**
 Do not return anything, modify nums in-place instead.
 借鉴快速排序的思想，题解视频见：https://leetcode.cn/problems/sort-colors/solution/yan-se-fen-lei-by-leetcode-solution/
 */
function sortColors(nums: number[]): void {
  // all element in [0, p0) is 0, [p0, cur) is 1, (p2, len-1] is 2
  let p0 = 0,
    p1 = nums.length - 1,
    cur = 0;
  while (cur <= p1) {
    switch (nums[cur]) {
      case Color.RED:
        swap(nums, p0, cur);
        p0++;
        cur++;
        break;
      case Color.WHITE:
        cur++;
        break;
      case Color.BLUE:
        swap(nums, cur, p1);
        p1--;
    }
  }
  console.log('color: ', nums);
}

sortColors([2, 0, 2, 1, 1, 0]);
