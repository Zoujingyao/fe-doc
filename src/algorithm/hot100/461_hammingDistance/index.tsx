export default () => {
  function hammingDistance(x: number, y: number): number {
    let bit = 0;
    let base = Math.pow(2, bit);
    let res = 0;
    // debugger;
    while (base <= x || base <= y) {
      // 分别取出x,y的对应位后进行异或
      res += ((x & base) ^ (y & base)) >> bit;
      bit++;
      base = Math.pow(2, bit);
    }
    return res;
  }

  console.log('461_hammingDistance: ', hammingDistance(1, 5));

  return '461_hammingDistance';
};
