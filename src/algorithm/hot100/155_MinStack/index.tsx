import { MinStack } from './MinStack';

export default () => {
  const funs = ['MinStack', 'push', 'push', 'push', 'getMin', 'pop', 'top', 'getMin'];
  const ops = [[], [-2], [0], [-3], [], [], [], []];
  if (funs.length !== ops.length) console.error('指令数不一致');

  const minStack = new MinStack();
  // debugger;

  const funcMap = new Map<string, number>();
  funcMap.set('push', 1);
  funcMap.set('getMin', 2);
  funcMap.set('pop', 3);
  funcMap.set('top', 4);

  const funcMapCall: Record<number, (op: number[]) => void> = {
    1: (op: number[]) => minStack.push(op[0]),
    2: () => minStack.getMin(),
    3: () => minStack.pop(),
    4: () => minStack.top(),
  };

  const runFunc = (func: string, op: number[]) => {
    const opType: number = funcMap.get(func)!;
    return funcMapCall[opType](op);
  };

  for (let i = 1; i < funs.length; i++) {
    console.log(runFunc(funs[i], ops[i]));
  }

  return 'MinStack';
};
