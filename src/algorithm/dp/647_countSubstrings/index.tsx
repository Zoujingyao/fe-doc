import React from 'react';

export default () => {
  function countSubstrings(s: string): number {
    let res: number = s.length; // 一个字母的都是回文串
    // dp[i][j]表示子串str[i, j]是否为回文子串
    const dp = new Array(s.length).fill([]).map(() => new Array(s.length).fill(false));
    // 初始化长度为2的子串
    for (let i = 0; i + 1 < s.length; i++) {
      dp[i][i] = true;
      if (s[i] === s[i + 1]) {
        dp[i][i + 1] = true;
        res++;
      }
    }
    let r;
    // 递推长度为3-s.length的子串
    for (let len = 3; len <= s.length; len++) {
      // 枚举左端点
      for (let l = 0; l + len - 1 < s.length; l++) {
        r = l + len - 1;
        if (s[l] === s[r] && dp[l + 1][r - 1]) {
          dp[l][r] = true;
          res++;
        }
      }
    }
    return res;
  }

  const testStr = 'rede';

  return (
    <div>
      <h1>647_countSubstrings</h1>
      <p>{`testStr=${testStr}, res=${countSubstrings(testStr)}`}</p>
    </div>
  );
};
