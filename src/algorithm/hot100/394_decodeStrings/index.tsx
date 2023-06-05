import React from 'react';

export default () => {
  function decodeString(s: string): string {
    const numSet = new Set<string>();
    for (let i = 0; i < 10; i++) {
      numSet.add(i.toString());
    }
    const letterSet = new Set<string>();
    for (let i = 0; i < 26; i++) {
      letterSet.add(String.fromCharCode(97 + i));
    }

    if (!s.length) return s;
    const numStack: number[] = [];
    const letterStack: string[] = [];
    let isNumeric = numSet.has(s[0]),
      curNum = isNumeric ? s[0] : '',
      curStr = !isNumeric ? s[0] : '';
    // debugger;
    let temp: string;
    for (let i = 1; i < s.length; i++) {
      temp = s[i];
      if (temp === '[') {
        // 之前肯定是数字
        numStack.push(parseInt(curNum));
        curNum = '';
        isNumeric = false;
        letterStack.push(temp);
      } else if (temp === ']') {
        // numStack取栈顶，charStack取到[，然后恢复字符串后压入charStack;
        if (curStr.length) {
          letterStack.push(curStr);
          curStr = '';
        }
        const topNum = numStack.pop();
        let topStr: string = '';
        while (letterStack[letterStack.length - 1] !== '[') {
          topStr = letterStack.pop() + topStr;
        }
        letterStack.pop();
        letterStack.push(topStr.repeat(topNum!));
      } else if (numSet.has(temp)) {
        // 数字，拼接
        isNumeric = true;
        curNum += temp;
        if (curStr.length) {
          letterStack.push(curStr);
          curStr = '';
        }
      } else if (letterSet.has(temp)) {
        isNumeric = false;
        curStr += temp;
        if (curNum.length) {
          numStack.push(parseInt(curNum));
          curNum = '';
        }
      }
    }

    // console.log('numStack: ', numStack);
    if (curStr.length) letterStack.push(curStr);
    let res: string = '';
    for (let i = 0; i < letterStack.length; i++) {
      res += letterStack[i];
    }
    return res;
  }

  const s = '3[a]d';
  // const s = '3[a2[c]]';
  return (
    <div>
      <h1>739_dailyTemperatures</h1>
      <p>{`s=${s}, res=${decodeString(s)}`}</p>
    </div>
  );
};
