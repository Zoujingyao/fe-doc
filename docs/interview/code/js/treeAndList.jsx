const treeData = [
  {
    id: 1,
    text: '节点1',
    pid: 0,
    children: [
      {
        id: 2,
        text: '节点1_1',
        pid: 1,
        children: [
          {
            id: 6,
            text: '节点2_1',
            pid: 2,
          },
        ],
      },
      {
        id: 3,
        text: '节点1_2',
        pid: 1,
      },
    ],
  },
  {
    id: 4,
    text: '节点4',
    pid: 0,
    children: [
      {
        id: 5,
        text: '节点4_1',
        pid: 4,
      },
    ],
  },
];

function treeToList(datas) {
  const res = [];

  function traverse(data) {
    data.forEach((item) => {
      let { children, ...rest } = item;
      res.push(rest); // 先push父节点的列表项
      if (children) traverse(item.children);
      // res.push(rest);
    });
  }

  traverse(datas);
  return res;
}

const listData = treeToList(treeData);
console.log('listData: ', listData);

function listToTree(datas) {
  const res = [];
  const map = {};
  datas.forEach((item) => {
    map[item.id] = {
      ...item,
      children: map[item.id]?.children || [],
    };

    let curItem = map[item.id];
    if (item.pid === 0)
      res.push(
        curItem,
      ); // 注意！！！res中存放的都是map值的引用，所以后续的更新能体现出来，如果用Map，get返回的是值不是引用就达不到目的。
    else {
      if (!map[item.pid]) {
        map[item.pid] = { children: [] };
      }
      map[item.pid].children.push(curItem);
    }
  });
  return res;
}

console.log('treeData', listToTree(listData));

export default () => {
  return 'List & Tree';
};

setTimeout(() => {
  console.log(1);
}, 3000);
