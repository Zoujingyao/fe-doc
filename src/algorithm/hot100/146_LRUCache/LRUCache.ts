export class LRUCache {
  private readonly capacity: number;
  private cacheMap: Map<number, number>;
  private readonly visitOrder: number[];

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cacheMap = new Map<number, number>();
    this.visitOrder = [];
  }

  private getLRUKey(): number {
    const len = this.visitOrder.length;
    // 压入的时候去重了，不需要
    const visitedSet = new Set<number>();
    for (let i = len - 1; i >= 0; i--) {
      if (this.cacheMap.has(this.visitOrder[i])) {
        visitedSet.add(this.visitOrder[i]);
      }
      if (visitedSet.size === this.capacity) {
        return this.visitOrder[i];
      }
    }
    return -1;
  }

  private updateVisitOrder(visitKey: number): void {
    const len = this.visitOrder.length;
    if (len || visitKey !== this.visitOrder[this.visitOrder.length - 1]) {
      this.visitOrder.push(visitKey);
    }
  }

  get(key: number): number {
    this.updateVisitOrder(key);
    const val = this.cacheMap.get(key);
    return val !== undefined ? val : -1;
  }

  put(key: number, value: number): void {
    this.updateVisitOrder(key);
    if (!this.cacheMap.has(key) && this.cacheMap.size === this.capacity) {
      // 寻找最近最久未使用的key
      const delKey = this.getLRUKey();
      this.cacheMap.delete(delKey);
    }
    this.cacheMap.set(key, value);
  }
}
