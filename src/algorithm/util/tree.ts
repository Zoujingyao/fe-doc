export type TNode = TreeNode | null;

/** Definition for a binary tree node. */
export class TreeNode {
  val: number;
  left: TNode;
  right: TNode;
  constructor(val?: number, left?: TNode, right?: TNode) {
    this.val = val !== undefined ? val : 0;
    this.left = left !== undefined ? left : null;
    this.right = right !== undefined ? right : null;
  }
}
