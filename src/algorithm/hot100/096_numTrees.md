---
group:
  title: 热题100
  path: /algorithm/hot100
---

# 96. [不同的二叉搜索树](https://leetcode.cn/problems/unique-binary-search-trees/)

## 思路

动态规划，设

- f(n)表示 1-n 组成的不同二叉搜索树数目；
- G(root, len)表示以 root 为根，1-len 组成的不同二叉搜索树数目；

很容易能想到 f(n)等于让 1-n 每个数当一次根节点，然后统计左右子树数目的乘积。也就是 G(1, n) + G(2, n) + ... + G(n, n);

那么 G(root, n)左子树节点集为[1, 2, ..., root-1]，右子树节点集为[root + 1, root + 2, ..., n]；

这里有一个重点要想清楚的就是节点集并不重要，数目才重要，例如 G(2, 5)，左子树集合是[1]，右子树集合是[3, 4, 5]；

考虑右子树集合[3, 4, 5]，其实只有长度重要，我们可以想象成是[1, 2, 3]，也就是 f(3)；

！！所以 G(root, n) = 左子集构成的树数目 _ 右子集构成的树数目 = G(root-1) _ G(n - root);

这样就得到了递推方程： f(n) = \sum*{i=1}^{n} G(i, n) = \sum*{i=1}^{n} f(i-1)\*f(n-i)；

可以看到 f(n)依赖于 f(0), f(1), ..., f(n-1)；所以从小算到大；

初始值，f(0) = f(1) = 1；一个节点或空树，只有一种情况。

## 代码

```typescript
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
```
