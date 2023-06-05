import { TreeNode } from '../../util';

export default () => {
  function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    function buildTreeByPreAndInOrder(
      preL: number,
      preR: number,
      inL: number,
      inR: number,
    ): TreeNode | null {
      if (preL > preR) return null;
      // preorder中第一个节点为当前的根
      const val: number = preorder[preL];
      const node: TreeNode = new TreeNode(val);
      // 寻找该节点在中序遍历中的位置
      let k: number = 0;
      for (let i = inL; i <= inR; i++) {
        if (inorder[i] === val) {
          k = i;
          break;
        }
      }
      // 左子树的节点个数
      const leftNum: number = k - inL;
      node.left = buildTreeByPreAndInOrder(preL + 1, preL + leftNum, inL, k - 1);
      node.right = buildTreeByPreAndInOrder(preL + leftNum + 1, preR, k + 1, inR);
      return node;
    }

    return buildTreeByPreAndInOrder(0, preorder.length - 1, 0, inorder.length - 1);
  }

  return 'buildTree';
};
