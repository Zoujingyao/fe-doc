import { Trie } from './trie';

export default () => {
  const funs = ['Trie', 'search', 'insert', 'search', 'search', 'startsWith', 'insert', 'search'];
  const ops = [[], ['a'], ['apple'], ['apple'], ['app'], ['app'], ['app'], ['app']];
  if (funs.length !== ops.length) console.error('指令数不一致');

  const trie = new Trie();
  // debugger;

  const funcMap = new Map<string, number>();
  funcMap.set('insert', 1);
  funcMap.set('search', 2);
  funcMap.set('startsWith', 3);

  const funcMapCall: Record<number, (op: string) => void> = {
    1: (op: string) => trie.insert(op),
    2: (op: string) => trie.search(op),
    3: (op: string) => trie.startsWith(op),
  };

  const runFunc = (func: string, op: string) => {
    const opType: number = funcMap.get(func)!;
    return funcMapCall[opType](op);
  };

  // debugger;
  for (let i = 1; i < funs.length; i++) {
    console.log(runFunc(funs[i], ops[i][0]));
  }

  return 'trie';
};
