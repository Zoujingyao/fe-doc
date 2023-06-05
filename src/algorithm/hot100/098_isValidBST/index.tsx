import { TreeNode } from '../../util';

export default () => {
  function isValidBST(root: TreeNode | null): boolean {
    function isValid(node: TreeNode | null, lower: number, upper: number): boolean {
      // debugger;
      if (!node) return true;
      if (node.val <= lower || node.val >= upper) return false;
      return isValid(node.left, lower, node.val) && isValid(node.right, node.val, upper);
    }

    return isValid(root, -Infinity, Infinity);
  }

  const root = new TreeNode(4, new TreeNode(3), new TreeNode(5));
  console.log(isValidBST(root));

  return 'isValidBST';
};
