import React from 'react';

export default () => {
  function findAnagrams(s: string, p: string): number[] {
    if (s.length < p.length) return []; // 特判

    const charToNumMap = new Map<string, number>();

    for (let i = 0; i < 26; i++) {
      charToNumMap.set(String.fromCharCode(97 + i), i);
    }

    // 存放窗口内s子串和p各字母还差几个
    const count: number[] = new Array(26).fill(0);

    for (let i = 0; i < p.length; i++) {
      count[charToNumMap.get(p[i])!]--;
      count[charToNumMap.get(s[i])!]++;
    }

    // 初始窗口
    let diffNum = 0; // 数量不同的字母个数
    for (let i = 0; i < 26; i++) {
      if (count[i] !== 0) {
        diffNum++;
      }
    }

    const res: number[] = [];
    if (diffNum === 0) res.push(0);

    // debugger;
    let left, right;
    for (let i = 0; i + p.length < s.length; i++) {
      // 考虑窗口[i+1, i+p.length]
      // 减去s[i]，加上s[i+p.length]
      left = charToNumMap.get(s[i])!;
      if (count[left] === 1) {
        // s[i]字母数相同了
        diffNum--;
      } else if (count[left] === 0) {
        // s[i]字母本来相同，现在不同了
        diffNum++; // 多了一个不同的字母
      }
      count[left]--;

      right = charToNumMap.get(s[i + p.length])!;
      if (count[right] === -1) {
        // s[i]字母数相同了
        diffNum--;
      } else if (count[right] === 0) {
        // s[i]字母本来相同，现在不同了
        diffNum++; // 多了一个不同的字母
      }
      count[right]++;

      if (diffNum === 0) {
        res.push(i + 1);
      }
    }
    return res;
  }

  const s = 'baa',
    p = 'aa';
  return (
    <div>
      <h1>438_findAnagrams</h1>
      <p>{`s=${s}, p=${p}, res=${findAnagrams(s, p)}`}</p>
    </div>
  );
};
