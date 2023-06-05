import { LRUCache } from './LRUCache';

export default () => {
  const funs = ['LRUCache', 'put', 'put', 'get', 'put', 'get', 'put', 'get', 'get', 'get'];
  const ops = [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]];
  const resStr = [undefined, undefined, undefined, 1, undefined, -1, undefined, -1, 3, 4];

  if (funs.length !== ops.length) console.error('指令数不一致');

  const funcMap = new Map<string, number>();
  funcMap.set('put', 1);
  funcMap.set('get', 2);

  const lruCache = new LRUCache(ops[0][0]);
  // debugger;
  for (let i = 1; i < funs.length; i++) {
    let res;
    if (funcMap.get(funs[i]) === 1) {
      res = lruCache.put(ops[i][0], ops[i][1]);
    } else {
      res = lruCache.get(ops[i][0]);
    }
    console.log('res: ', res);
    if (res !== resStr[i]) console.error('不一致: ', res, resStr[i]);
  }

  return 'LRUCache';
};
