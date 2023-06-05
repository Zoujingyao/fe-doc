function longestPalindrome(s: string): string {
  const len = s.length;
  // 构建dp二维数组，初始默认为false
  const dp = new Array(len).fill(0).map(() => new Array(len).fill(false));
  let ans: string = s.slice(0, 1),
    maxLen = 1;
  // 遍历长度为1和2的子串
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
    if (i < s.length - 1 && s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      if (maxLen < 2) {
        maxLen = 2;
        ans = s.slice(i, i + 2);
      }
    }
  }
  // 遍历长度大于3的子串
  for (let l = 3; l <= s.length; l++) {
    for (let i = 0; i + l - 1 < s.length; i++) {
      if (s[i] === s[i + l - 1]) {
        // 两头一样，是否是回文取决中中间这截是否是回文
        dp[i][i + l - 1] = dp[i + 1][i + l - 2];
        if (dp[i][i + l - 1] && maxLen < l) {
          maxLen = l;
          ans = s.slice(i, i + l);
        }
      }
    }
  }
  return ans;
}

console.log(longestPalindrome('ababa'));
