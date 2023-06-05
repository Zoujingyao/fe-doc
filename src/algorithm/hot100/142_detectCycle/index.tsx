import { ListNode } from '../../util';

export default () => {
  function detectCycle(head: ListNode | null): ListNode | null {
    if (head === null) return null;
    let slow: ListNode | null = head,
      fast: ListNode | null = head;
    while (fast !== null) {
      slow = slow!.next;
      if (fast.next !== null) {
        fast = fast.next.next;
      } else {
        // fast到了链表尾部，无环
        return null;
      }
      if (fast === slow) {
        // 相遇了
        let ptr: ListNode = head;
        while (ptr !== slow) {
          slow = slow!.next;
          ptr = ptr!.next!;
        }
        return ptr;
      }
    }
    return null;
  }

  detectCycle(new ListNode(3));

  return 'detectCycle';
};
