import React from 'react';
import { TreeNode } from '../../util';

export default () => {
  function convertBST(root: TreeNode | null): TreeNode | null {
    let curSum = 0;

    // 右、根、左
    function middleMirrorTraverse(node: TreeNode | null) {
      if (node === null) return 0;
      middleMirrorTraverse(node.right);
      curSum += node.val;
      node.val = curSum;
      middleMirrorTraverse(node.left);
    }

    middleMirrorTraverse(root);
    return root;
  }

  const root = new TreeNode();

  return (
    <div>
      <h1>538_convertBST</h1>
      <p>{`root=${root}, res=${convertBST(root)}`}</p>
    </div>
  );
};
