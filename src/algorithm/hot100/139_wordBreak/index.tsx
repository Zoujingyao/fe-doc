export default () => {
  function wordBreak(s: string, wordDict: string[]): boolean {
    const n: number = s.length;
    const wordDictSet: Set<string> = new Set(wordDict);
    const dp = new Array(n + 1).fill(false);
    dp[0] = true;
    let tempSubStr: string;
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        // debugger;
        tempSubStr = s.substr(j, i - j);
        if (dp[j] && wordDictSet.has(tempSubStr)) {
          dp[i] = true;
          break;
        }
      }
    }
    return dp[n];
  }

  // console.log(wordBreak('applepenapple', ['apple', 'pen']));

  return 'wordBreak';
};
