import { TreeNode } from '../../util';

export default () => {
  function flatten(root: TreeNode | null): void {
    function getLowestRightNode(node: TreeNode): TreeNode {
      let temp = node;
      while (temp.right) {
        temp = temp.right;
      }
      return temp;
    }

    let cur: TreeNode | null = root;
    while (cur) {
      if (!cur.left && !cur.right) break;
      if (cur.left && !cur.right) {
        cur.right = cur.left;
      } else if (cur.left && cur.right) {
        getLowestRightNode(cur.left).right = cur.right;
        cur.right = cur.left;
      }
      cur.left = null;
      cur = cur.right;
    }
  }

  flatten(new TreeNode(2, new TreeNode(3), new TreeNode(5)));

  return 'flatten';
};
