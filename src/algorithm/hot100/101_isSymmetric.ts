import type { TNode } from '../util';
import { TreeNode } from '../util';

/** 递归写法，TODO 非递归写法 */
function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return false;

  const subLeft: number[] = [];
  const subRight: number[] = [];

  // 递归写法
  function isSame(left: TNode, right: TNode): boolean {
    if (left === null && right === null) return true;
    if (left === null || right === null) return false;
    if (!isSame(left.left, right.right)) return false;
    if (left.val !== right.val) return false;
    return isSame(left.right, right.left);
  }

  // 无法解决位置的问题[1, 2, 2, 2, null, 2, null]，先序和镜像先序遍历结果都是[2, 2]
  function preOrderTraverse(node: TNode) {
    if (node === null) return;
    subLeft.push(node.val);
    preOrderTraverse(node.left);
    preOrderTraverse(node.right);
  }

  function preOrderMirrorTraverse(node: TNode) {
    if (node === null) return;
    subRight.push(node.val);
    preOrderMirrorTraverse(node.right);
    preOrderMirrorTraverse(node.left);
  }

  function isArrayElementEqual(arrayA: number[], arrayB: number[]): boolean {
    if (arrayA.length !== arrayB.length) return false;
    for (let i = 0; i < arrayA.length; i++) {
      if (arrayA[i] !== arrayB[i]) return false;
    }
    return true;
  }

  preOrderTraverse(root.left);
  preOrderMirrorTraverse(root.right);

  // console.log(subLeft, subRight);

  return isArrayElementEqual(subLeft, subRight);
}
