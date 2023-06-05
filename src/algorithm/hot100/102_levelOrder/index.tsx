import { TreeNode } from '../../util';

export default () => {
  function levelOrder(root: TreeNode | null): number[][] {
    const res: number[][] = [];
    if (!root) return res;
    let curQueue: TreeNode[] = [];
    let nextLevelQueue: TreeNode[] = [];
    curQueue.push(root);
    let temp: TreeNode = root;
    let levelNodeVals: number[] = [];
    while (curQueue.length) {
      // debugger;
      while (curQueue.length) {
        temp = curQueue[0];
        levelNodeVals.push(temp.val);
        curQueue = curQueue.slice(1);
        if (temp?.left) nextLevelQueue.push(temp.left);
        if (temp?.right) nextLevelQueue.push(temp.right);
      }

      res.push(levelNodeVals);
      levelNodeVals = [];
      curQueue = [...nextLevelQueue];
      nextLevelQueue = [];
    }

    return res;
  }

  console.log(levelOrder(new TreeNode(5, null, new TreeNode(3))));

  return 'levelOrder';
};
