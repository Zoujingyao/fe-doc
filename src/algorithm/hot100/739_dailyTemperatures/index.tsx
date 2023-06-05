import React from 'react';

export default () => {
  function dailyTemperatures(temperatures: number[]): number[] {
    const stack: number[] = [];
    const res = new Array(temperatures.length).fill(0);
    // debugger;
    for (let i = 0; i < temperatures.length; i++) {
      // 不断出栈，直到栈顶元素大于temperatures[i]
      let top;
      while (stack.length) {
        top = stack[stack.length - 1];
        if (temperatures[i] > temperatures[top]) {
          res[top] = i - top;
          stack.pop();
        } else {
          break;
        }
      }
      stack.push(i);
    }
    return res;
  }

  const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
  return (
    <div>
      <h1>739_dailyTemperatures</h1>
      <p>{`temperatures=${temperatures}, res=${dailyTemperatures(temperatures)}`}</p>
    </div>
  );
};
