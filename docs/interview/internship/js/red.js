function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// 有一个二叉树的根节点 root，计算从根节点到叶节点生成的所有数字之和。
// 每条从根节点到叶节点的路径都代表一个数字

/**
 * 例：
 *     4
 *    / \
 *   9   0
 *  / \
 * 5   1
 *
 * 495 + 491 + 40 = 1026
 */

var demoTree = new TreeNode(4, new TreeNode(9, new TreeNode(5), new TreeNode(1)), new TreeNode(0));

var sumNumbers = function (root) {
  const strArrs = [];

  function preTraverse(node, curStr) {
    console.log(node.val, curStr);
    curStr += node.val;
    if (!node.left && !node.right) {
      // 叶子
      strArrs.push(curStr);
      curStr = '';
    }
    if (node.left !== null) preTraverse(node.left, curStr);
    if (node.right !== null) preTraverse(node.right, curStr);
  }

  preTraverse(root, '');
  console.log(strArrs);
};
console.log(sumNumbers(demoTree));

// -----
const dfs = (root, prevSum) => {
  if (root === null) {
    return 0;
  }
  const sum = prevSum * 10 + root.val;
  if (root.left == null && root.right == null) {
    return sum;
  } else {
    return dfs(root.left, sum) + dfs(root.right, sum);
  }
};
