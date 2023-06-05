import { ListNode } from '../../util';

export default () => {
  function reverseList(head: ListNode | null): ListNode | null {
    if (head === null) return null;
    const newHead = new ListNode();
    let tail = null;
    let cur: ListNode = head,
      p: ListNode | null = head;
    while (p !== null) {
      cur = p;
      newHead.next = p;
      p = p.next;
      cur.next = tail;
      tail = cur;
    }
    return newHead.next;
  }

  return 'reverseList';
};
