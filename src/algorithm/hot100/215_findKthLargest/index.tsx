export default () => {
  function findKthLargest(nums: number[], k: number): number {
    const n = 10000;
    const maxn = 2 * (n + 10);
    const sqrn = Math.floor(Math.sqrt(maxn));
    // table[i]存放i的个数
    const table: number[] = new Array(maxn).fill(0);
    // block[i]存放第i块中的元素个数
    const block: number[] = new Array(sqrn).fill(0);

    // 添加元素x
    function add(x: number) {
      table[x]++;
      block[Math.floor(x / sqrn)]++;
    }

    // 删除元素x
    function del(x: number) {
      table[x]--;
      block[Math.floor(x / sqrn)]--;
    }

    // 查询第_k大的数
    function query(_k: number): number {
      // debugger;
      let sum: number = 0;
      let blockX: number = 0;
      // 先找到第_k大的数在哪个块
      for (let i = 0; i < sqrn; i++) {
        blockX = i;
        if (sum + block[i] >= _k) {
          break;
        }
        sum = sum + block[i];
      }
      // 然后在第blockX中找第_k大的数
      let num = blockX * sqrn;
      while (sum < _k) {
        if (sum + table[num] >= _k) {
          return num;
        }
        sum += table[num];
        num++;
      }
      return -1;
    }

    for (let i = 0; i < nums.length; i++) {
      add(nums[i] + n);
    }
    return query(nums.length - k + 1) - n;
  }

  console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));

  return 'findKthLargest';
};
