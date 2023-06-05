---
group:
  title: 分治
  path: /algorithm/divide-conquer
---

# [347. 前 K 个高频元素](https://leetcode.cn/problems/top-k-frequent-elements/?favorite=2cktkvj)

## 思路

这题和【前 k 个最大的元素】一样，不过求的是每个元素的出现次数数组中的前 k 个最大元素，所以需要把每个元素和其出现次数记录下来。

本来是用两个 map 实现，但是若干个数的出现次数可能是一样的，导致次数->元素中的次数无法作为唯一键，那这里可以仿照 c++实现一个`Pair`。

---

问题转换做好了，对于求前 K 大的元素，可以用堆排序或者快排做，堆排序写起来更不容易出错，快排的性能更好 O(n)。

(二叉树搜索的时间复杂度等于所有节点的规模之和，对于本题本次都只需要往左/右子树遍历，所以每层只有一个节点，节点规模为`n+n/2+n/4+...+n/2x ~= 2n`)

用快排`qs[l, r]`：

- 确定一个基准元素，将比它大的元素都放到它左边，记录基准元素下标`pos`；
- 计算其左边的元素个数`leftNum (leftNum = pos - l)`;
  - 如果大于等于`k`，说明前 K 大元素都在左部分，继续往左子序列快排`qs(l, pos-1)`；
  - 否则左半部分+基准元素都是前`k`大的元素，将它们都加入`res`数组后，继续往右边找第 k`-(leftNum+1)`大的元素`qs(pos+1, k-(leftNum+1))`;

## 代码

<code src='./index.tsx'></code>