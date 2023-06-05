import { TreeNode, TNode } from './types';

function maxDepth(root: TNode): number {
  function getMax(a: number, b: number) {
    return a >= b ? a : b;
  }

  function getMaxDepth(node: TNode, height: number): number {
    if (node === null) return height;
    return getMax(getMaxDepth(node.left, height + 1), getMaxDepth(node.right, height + 1));
  }

  return getMaxDepth(root, 0);
}

const root_104 = new TreeNode(3);
root_104.left = new TreeNode(5);
root_104.left.left = new TreeNode(6);
console.log(maxDepth(root_104));
