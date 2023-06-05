import { TreeNode } from '../../util';

export default () => {
  function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null,
  ): TreeNode | null {
    const fatherMap: Map<number, TreeNode> = new Map<number, TreeNode>();
    const vis: Set<number> = new Set<number>();

    // 遍历一遍，记录每个节点的父节点；
    function traverse(node: TreeNode) {
      if (node.left !== null) {
        fatherMap.set(node.left.val, node);
        traverse(node.left);
      }
      if (node.right !== null) {
        fatherMap.set(node.right.val, node);
        traverse(node.right);
      }
    }

    // root为根的树中至少有两个节点（题目保证）
    traverse(root!);

    // 从p开始往上遍历，并将父节点依次标记为已访问
    let temp = p,
      father;
    while (temp) {
      if (temp === q) return q;
      vis.add(temp.val); // 保证了各节点值不相同，所以可以只存val
      father = fatherMap.get(temp.val);
      temp = father ? father : null;
    }

    // 从q开始往上遍历，遇到的节点如果已访问，则是最近的祖先
    temp = q;
    while (temp !== null) {
      father = fatherMap.get(temp.val)!;
      if (vis.has(temp.val)) {
        return temp;
      }
      temp = father;
    }
    return null;
  }

  return 'lowestCommonAncestor';
};
