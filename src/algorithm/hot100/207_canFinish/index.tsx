import ad from '../../../../../knowledge-mixer-design/src/assets/icon/ad';

export default () => {
  function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const inDegree: number[] = new Array(numCourses).fill(0);
    const adj = new Map<number, number[]>();

    let key: number, val: number;
    let nodes: number[];
    for (let i = 0; i < prerequisites.length; i++) {
      [key, val] = prerequisites[i];
      inDegree[val]++;
      nodes = adj.get(key) ?? [];
      adj.set(key, [...nodes, val]);
    }

    let queue: number[] = [];
    // 所有入度为0的节点都放入队列
    for (let i = 0; i < numCourses; i++) {
      if (inDegree[i] === 0) {
        queue.push(i);
      }
    }

    let tempNode: number;
    let tempNodes: number[];
    // 统计进队列的节点个数
    let num: number = 0;
    while (queue.length) {
      tempNode = queue[0];
      num++;
      queue = queue.slice(1);
      tempNodes = adj.get(tempNode) || [];
      // 将该节点的边都删除，更新其能到达的节点入度
      for (let i = 0; i < tempNodes.length; i++) {
        inDegree[tempNodes[i]]--;
        // 某节点入度减为0，放入队列
        if (inDegree[tempNodes[i]] === 0) {
          queue.push(tempNodes[i]);
        }
      }
    }
    // 入过队列的节点恰好等于节点数，说明拓扑排序成功，无环；
    return num === numCourses;
  }

  console.log(
    canFinish(2, [
      [0, 1],
      [1, 0],
    ]),
  );

  return 'canFinish';
};
