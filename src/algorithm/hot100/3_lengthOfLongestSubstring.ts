function lengthOfLongestSubstring(s: string): number {
  if (!s.length) return 0;
  if (s.length === 1) return 1;
  let res = 0,
    l = 0,
    r = 1; // [l, r]滑动窗口
  const curCharSet = new Set();
  curCharSet.add(s[l]);
  while (r < s.length) {
    if (!curCharSet.has(s[r])) {
      // 右指针往右延伸到最大子串
      curCharSet.add(s[r]);
      r = r + 1;
    } else {
      // 统计当前窗口大小
      // console.log('l, r: ', l, r);
      res = Math.max(res, r - l);
      // 左指针滑动
      curCharSet.delete(s[l]);
      l = l + 1;
    }
  }
  return Math.max(res, r - l);
}

const testStr = 'au';
console.log(lengthOfLongestSubstring(testStr));
