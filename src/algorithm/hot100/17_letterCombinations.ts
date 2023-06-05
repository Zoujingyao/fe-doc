function letterCombinations(digits: string): string[] {
  const res: string[] = [];
  const symbols = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  const numToSymbolMap = new Map<number, string>();
  for (let i = 2; i <= 9; i++) {
    numToSymbolMap.set(i, symbols[i - 2]);
  }
  // 空串特判
  if (!digits.length) return res;

  function backtrace(res: string[], digits: string, curStr: string): void {
    if (!digits.length) {
      res.push(curStr);
      return;
    }
    let letters: string = numToSymbolMap.get(Number(digits[0]))!;
    for (let i = 0; i < letters.length; i++) {
      backtrace(res, digits.slice(1), curStr + letters[i]);
    }
  }

  backtrace(res, digits, '');
  return res;
}

console.log(letterCombinations('23'));
