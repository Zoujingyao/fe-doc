/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

export class MinStack {
  // 小顶堆
  private heap: number[];
  private stack: number[];
  private len: number;

  // 交换heap中下标为x1和x2的元素：
  private swap(x1: number, x2: number) {
    [this.heap[x2], this.heap[x1]] = [this.heap[x1], this.heap[x2]];
  }

  // 把最后一个元素向上调整到合适的位置
  private upAdjust(low: number, high: number) {
    // i为该节点当前的位置，j为其父亲节点的下标
    let i = high,
      j = Math.floor(high / 2);
    while (j >= low) {
      if (this.heap[i] < this.heap[j]) {
        this.swap(i, j);
        i = j;
        j = Math.floor(i / 2);
      } else {
        break;
      }
    }
  }

  // 把idx号元素向下调整到合适的位置
  private downAdjust(idx: number) {
    // i为当前要调整节点的下标，j为其左孩子的下标
    let i = idx,
      j = idx * 2;
    while (i <= this.len) {
      if (j + 1 <= this.len && this.heap[j + 1] < this.heap[j]) {
        j = j + 1;
      }
      // 如果当前节点比孩子中最小的节点大，向下调整
      if (this.heap[j] < this.heap[i]) {
        this.swap(i, j);
        i = j;
        j = i * 2;
      } else {
        break;
      }
    }
  }

  private deleteHeap() {
    // 把最后一个元素放在堆顶
    this.heap[1] = this.heap[this.len];
    this.heap.pop();

    this.len--;
    this.downAdjust(1);
  }

  constructor() {
    this.heap = [-1]; // 数组实现的heap下标从1开始
    this.stack = []; // 栈的下标从0开始
    this.len = 0;
  }

  // 把val压入堆
  push(val: number): void {
    this.heap.push(val);
    this.stack.push(val);
    this.len++;
    this.upAdjust(1, this.len);
  }

  // 删除栈顶元素
  pop(): void {
    const delVal = this.stack[this.stack.length - 1];
    this.stack.pop();

    // 堆要删除不知道哪个下标的元素

    // 如果delVal在栈顶，删，否则先不管
    if (this.heap[1] === delVal) {
      this.deleteHeap();
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    let valid: boolean;
    while (true) {
      // 如果当前堆顶元素已经被删除了，即不在stack中，就持续调deleteHeap，否则直接返回堆顶元素；
      valid = this.stack.findIndex((x) => x === this.heap[1]) !== -1;
      if (valid) {
        return this.heap[1];
      } else {
        this.deleteHeap();
      }
    }
  }
}
