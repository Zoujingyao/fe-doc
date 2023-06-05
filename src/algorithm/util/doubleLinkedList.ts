// Definition for singly-linked list.
export class DoubleLinkedListNode {
  val: number;
  pre: DoubleLinkedListNode | null;
  next: DoubleLinkedListNode | null;

  constructor(val?: number, pre?: DoubleLinkedListNode, next?: DoubleLinkedListNode | null) {
    this.val = val ? val : 0;
    this.pre = pre ? pre : null;
    this.next = next ? next : null;
  }
}
