import { DoubleLinkedListNode } from '../../util/doubleLinkedList';

// 哈希表 + 双向链表
export class LRUCache {
  private readonly capacity: number;
  private hashMap: Map<number, DoubleLinkedListNode>;
  private readonly nodesInCache: DoubleLinkedListNode;

  constructor(capacity: number) {

  }


  get(key: number): number {

  }

  put(key: number, value: number): void {

  }
}
