import React from 'react';
import { TreeNode } from '../../util';

export default () => {
  function pathSum(root: TreeNode | null, targetSum: number): number {
    let res = 0;

    function preOrderTraverse(node: TreeNode | null, prefixSum: number[]) {
      if (node === null) {
        return;
      }

      const curSum = prefixSum[prefixSum.length - 1];

      if (curSum === targetSum) res++; // 从根到该节点是一个
      // 前缀和去掉自己找curSum - targetSum；如果prefixSum[i]-prefixSum[i]，那就是选了0个节点，不是合法路径；
      res += prefixSum.slice(0, -1).filter((x) => x === curSum - targetSum).length;

      if (node.left) {
        preOrderTraverse(node.left, prefixSum.concat(curSum + node.left.val));
      }
      if (node.right) {
        preOrderTraverse(node.right, prefixSum.concat(curSum + node.right.val));
      }
    }

    if (root === null) return res;

    preOrderTraverse(root, [root.val]);
    return res;
  }

  const root = [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1],
    targetSum = 8;

  return (
    <div>
      <h1>437_pathSum</h1>
      <p>{`root=${root}, targetSum=${targetSum}, res=${pathSum(new TreeNode(3), targetSum)}`}</p>
    </div>
  );
};
