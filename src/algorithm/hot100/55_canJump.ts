function canJump(nums: number[]): boolean {
  let canJumpEnd: boolean[] = new Array(nums.length).fill(false);
  canJumpEnd[nums.length - 1] = true;
  for (let i = nums.length - 2; i >= 0; i--) {
    // 看在i处能跳到的位置中，如果有一个位置能到达末尾，那么该位置也能跳到末尾；
    for (let j = i; j < Math.min(i + nums[i] + 1, nums.length); j++) {
      if (canJumpEnd[j]) {
        canJumpEnd[i] = true;
        break;
      }
    }
  }
  return canJumpEnd[0];
}

console.log(canJump([3, 2, 1, 0, 4]));
