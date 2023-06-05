export default () => {
  function productExceptSelf(nums: number[]): number[] {
    let prefixP: number = 1,
      suffixP: number = 1;
    const n = nums.length;
    const res: number[] = new Array(n).fill(1);
    for (let i = 0; i < n; i++) {
      if (i > 0) {
        prefixP *= nums[i - 1];
        suffixP *= nums[n - i];
      }
      res[i] *= prefixP;
      res[n - i - 1] *= suffixP;
    }
    return res;
  }

  console.log(productExceptSelf([1, 2, 3, 4]));

  return 'productExceptSelf';
};
