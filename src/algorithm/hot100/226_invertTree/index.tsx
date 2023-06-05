import { TreeNode } from '../../util';

export default () => {
  function invertTree(root: TreeNode | null): TreeNode | null {
    if (root === null) return root;

    function preOrderMirror(node: TreeNode | null): TreeNode | null {
      if (node === null) return null;
      const head = new TreeNode(node.val);
      head.left = preOrderMirror(node.right);
      head.right = preOrderMirror(node.left);
      return head;
    }

    return preOrderMirror(root);
  }

  return 'invertTree';
};
