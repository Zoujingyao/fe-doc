import { TreeNode } from '../../util';

export default () => {
  function diameterOfBinaryTree(root: TreeNode): number {
    if (root === null) return 0;

    let res: number = 1; // 任意两个节点之间节点的个数最大值，直径是边数；就是res-1；

    // 深度表示树的层级，一个叶子节点的深度为1；
    function depth(rt: TreeNode | null): number {
      if (rt == null) {
        return 0; // 访问到空节点了，返回0
      }
      const L = depth(rt.left); // 左儿子为根的子树的深度
      const R = depth(rt.right); // 右儿子为根的子树的深度
      res = Math.max(res, L + R + 1); // 计算d_node即L+R+1 并更新res
      return Math.max(L, R) + 1; // 返回该节点为根的子树的深度
    }

    depth(root);
    return res - 1;
  }

  return '543_diameterOfBinaryTree';
};
