import React from 'react';
import { TreeNode } from '../../util';

export default () => {
  function rob(root: TreeNode | null): number {
    if (root === null) return 0;

    const f = new Map<TreeNode, number>();
    const g = new Map<TreeNode, number>();

    function getf(node: TreeNode | null): number {
      return node !== null ? f.get(node) || 0 : 0;
    }

    function getg(node: TreeNode | null): number {
      return node !== null ? g.get(node) || 0 : 0;
    }

    function postOrderTraverse(node: TreeNode | null) {
      if (node === null) return;
      postOrderTraverse(node.left);
      postOrderTraverse(node.right);

      f.set(node, getg(node.left) + getg(node.right) + node.val);

      g.set(
        node,
        Math.max(getf(node.left), getg(node.left)) + Math.max(getf(node.right), getg(node.right)),
      );
    }

    postOrderTraverse(root);

    return Math.max(f.get(root) || 0, g.get(root) || 0);
  }

  return (
    <div>
      <h1>337_rob</h1>
    </div>
  );
};
