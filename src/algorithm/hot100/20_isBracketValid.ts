function isValid(s: string): boolean {
  // 单数一定不匹配
  if (s.length % 2) return false;
  const stack = [];
  const bracketMap = new Map();
  bracketMap.set(')', '(');
  bracketMap.set(']', '[');
  bracketMap.set('}', '{');
  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    if (!bracketMap.has(cur)) {
      // 左括号
      stack.push(cur);
    } else {
      const topChar = stack[stack.length - 1];
      if (bracketMap.get(cur) !== topChar) return false;
      else {
        s.slice(0, -1);
        stack.pop();
      }
    }
  }
  return !stack.length;
}

const str = '(]]{';
console.log(isValid(str));
