function maxArea(height: number[]): number {
  let res: number = 0;
  if (!height.length) return res;
  let left: number = 0,
    right: number = height.length - 1,
    tempArea: number;
  while (left < right) {
    tempArea = Math.min(height[left], height[right]) * (right - left);
    res = Math.max(res, tempArea);
    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return res;
}
