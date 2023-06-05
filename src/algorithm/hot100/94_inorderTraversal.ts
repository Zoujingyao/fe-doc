import type { TNode } from '../util';
import { TreeNode } from '../util';

function inorderTraversal(root: TNode): number[] {
  const res: number[] = [];

  function inOrder(node: TNode): void {
    if (node === null) return;
    inOrder(node.left);
    res.push(node.val);
    inOrder(node.right);
  }

  inOrder(root);
  return res;
}

function inorderTraversal_stack(root: TNode): number[] {
  const res: number[] = [];

  function inOrder_stack(root: TNode): void {
    let temp: TNode = root;
    const s: TreeNode[] = [];
    while (temp !== null || s.length) {
      while (temp !== null) {
        s.push(temp);
        temp = temp.left;
      }
      // 左子树遍历完成
      if (s.length) {
        temp = s.pop()!;
        res.push(temp.val);
        temp = temp.right;
      }
    }
  }

  inOrder_stack(root);
  return res;
}

const root = new TreeNode(2);
root.left = new TreeNode(3);
root.left.left = null;
root.right = null;
console.log(inorderTraversal(root));
console.log(inorderTraversal_stack(root));
