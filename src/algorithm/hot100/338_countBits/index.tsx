export default () => {
  function countBits(n: number): number[] {
    const bitsNum = [0];
    if (n === 0) return bitsNum;
    let len = 1,
      base = Math.pow(2, len - 1);
    // debugger;
    for (let i = 1; i <= n; i++) {
      if (i !== base) {
        bitsNum.push(bitsNum[base / 2] + bitsNum[i - base / 2]);
      } else {
        bitsNum.push(1);
        // 更新长度和基准元素
        len++;
        base = Math.pow(2, len - 1);
      }
    }
    return bitsNum;
  }

  console.log('338_countBits: ', countBits(5));

  return '338_countBits';
};
