function numTrees(n: number): number {
  let res: number[] = [1, 1];
  for (let i = 2; i <= n; i++) {
    let temp: number = 0;
    for (let j = 1; j <= i; j++) {
      temp += res[j - 1] * res[i - j];
    }
    res.push(temp);
  }
  return res[n];
}

console.log(numTrees(2));
