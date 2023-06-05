import React from 'react';

export default () => {
  function leastInterval(tasks: string[], n: number): number {
    const taskNumArr = new Array(26).fill(0);
    let taskNum = tasks.length;
    if (!n) return taskNum;

    const map = new Map<string, number>();
    for (let i = 0; i < 26; i++) {
      map.set(String.fromCharCode(65 + i), i);
    }
    for (let i = 0; i < taskNum; i++) {
      taskNumArr[map.get(tasks[i])!]++;
    }

    let runTime = 0;

    while (taskNum > 0) {
      // taskNum--;
      let temp = n + 1; // CPU满载下可以每次执行n+1个任务
      // 贪心 降序排序
      taskNumArr.sort((a, b) => b - a);
      for (let i = 0; i < 26; i++) {
        if (taskNumArr[i] > 0) {
          taskNumArr[i]--;
          temp--;
          taskNum--;
          if (temp === 0 || taskNum === 0) break;
        }
      }
      if (taskNum === 0) {
        runTime += n + 1 - temp;
      } else {
        runTime += n + 1;
      }
    }
    return runTime;
  }

  const tasks = ['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C', 'D', 'D', 'E'],
    n = 2;

  return (
    <div>
      <h1>621_leastInterval</h1>
      <p>{`task=${tasks}, res=${leastInterval(tasks, n)}`}</p>
    </div>
  );
};
