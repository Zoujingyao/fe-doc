import React from 'react';

export default () => {
  function longestValidParentheses(s: string): number {
    let lnum = 0,
      rnum = 0,
      maxLen = 0;
    // 正向遍历
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
        lnum++;
      } else {
        rnum++;
      }
      if (lnum === rnum) maxLen = Math.max(maxLen, 2 * lnum);
      if (rnum > lnum) {
        // 右括号比左括号多())时，分割了前面可能有效的，新的有效只能从该位置向后找；
        lnum = 0;
        rnum = 0;
      }
    }

    // 逆向遍历
    lnum = 0;
    rnum = 0;
    for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] === '(') {
        lnum++;
      } else {
        rnum++;
      }
      if (lnum === rnum) maxLen = Math.max(maxLen, 2 * lnum);
      if (lnum > rnum) {
        // 左括号比右括号多(()时，分割了后面可能有效的，新的有效只能从该位置向前找；
        lnum = 0;
        rnum = 0;
      }
    }
    return maxLen;
  }

  const s = ')()())';

  return (
    <div>
      <h1>32_longestValidParentheses</h1>
      <p>{`s=${s}, res=${longestValidParentheses(s)}`}</p>
    </div>
  );
};
