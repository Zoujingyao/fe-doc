import React from 'react';
import { Pair } from '../../util/pair';

export default () => {
  function topKFrequent(nums: number[], k: number): number[] {
    const occurrences = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
      occurrences.set(nums[i], (occurrences.get(nums[i]) || 0) + 1);
    }
    const pairsArr: Pair[] = [];
    for (const [key, val] of occurrences) {
      pairsArr.push(new Pair(key, val));
    }

    const res: number[] = [];

    // 使用快速排序的partition思想找出【出现次数数组】的前k大元素，并将其对应的数字加入res数组；

    // 对timesArr[l, r].second进行partition操作，并返回最终基准元素的下标
    function partition(l: number, r: number): number {
      const temp = pairsArr[l];
      let left = l,
        right = r;
      while (left < right) {
        while (left < right && pairsArr[right].second <= temp) right--;
        pairsArr[left] = pairsArr[right];
        while (left < right && pairsArr[left].second > temp) left++;
        pairsArr[right] = pairsArr[left];
      }
      pairsArr[left] = temp;
      return left;
    }

    // 其实只需要找出比基准元素大的就行
    function partitionHalf(l: number, r: number): number {
      // debugger;
      const start = l;
      let idx = start;
      for (let i = start + 1; i <= r; i++) {
        if (pairsArr[i].second > pairsArr[start].second) {
          [pairsArr[idx + 1], pairsArr[i]] = [pairsArr[i], pairsArr[idx + 1]];
          idx++;
        }
      }
      [pairsArr[start], pairsArr[idx]] = [pairsArr[idx], pairsArr[start]];
      return idx;
    }

    // 对timesArr[l, r]快排，找第kk大的元素
    function qSort(l: number, r: number, kk: number) {
      // debugger;
      // const pos = partition(l, r);
      const pos = partitionHalf(l, r);
      const leftNum = pos - l;
      if (leftNum >= kk) {
        // 继续在左半边找kk大的
        qSort(l, pos - 1, kk);
      } else {
        // 左半边是满足的
        for (let i = l; i <= pos; i++) {
          res.push(pairsArr[i].first);
        }
        if (kk > leftNum + 1) {
          // 继续在右边找
          qSort(pos + 1, r, kk - (leftNum + 1));
        }
      }
    }

    qSort(0, pairsArr.length - 1, k);
    return res;
  }

  const nums = [3, 0, 1, 0],
    k = 1;
  return (
    <div>
      <h1>347_topKFrequent</h1>
      <p>{`nums=${nums}, k=${k}, res=${topKFrequent(nums, k)}`}</p>
    </div>
  );
};
