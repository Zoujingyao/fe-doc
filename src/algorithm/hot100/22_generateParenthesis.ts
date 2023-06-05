function generateParenthesis(n: number): string[] {
  const res: string[] = [];
  function dfs(ln: number, rn: number, curStr: string) {
    if (ln === 0 && rn === 0) {
      res.push(curStr);
      return;
    }
    if (ln > 0) {
      // 只要还有左括号，就可以先拼接左括号
      dfs(ln - 1, rn, curStr + '(');
    }
    if (ln < rn) {
      // 剩余的右括号比左括号多就可以拼一个右括号
      dfs(ln, rn - 1, curStr + ')');
    }
  }

  dfs(n, n, '');
  return res;
}

console.log(generateParenthesis(3));
