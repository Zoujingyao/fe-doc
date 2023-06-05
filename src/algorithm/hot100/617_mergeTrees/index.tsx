import { TreeNode } from '../../util';

export default () => {
  function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
    function traverse(node1: TreeNode | null, node2: TreeNode | null): TreeNode | null {
      if (node1 === null) return node2;
      if (node2 === null) return node1;
      const newNode = new TreeNode(node1.val + node2.val);
      newNode.left = traverse(node1.left, node2.left);
      newNode.right = traverse(node1.right, node2.right);
      return newNode;
    }

    return traverse(root1, root2);
  }

  return '617_mergeTrees';
};
