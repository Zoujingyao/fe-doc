import { ListNode } from '../util';

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let carry = 0; // 进位
  let tempSum = 0;
  let cur = new ListNode(0);
  const head = cur;
  let val1, val2;
  while (l1 || l2 || carry) {
    val1 = l1 ? l1.val : 0;
    val2 = l2 ? l2.val : 0;
    tempSum = val1 + val2 + carry;
    carry = Math.floor(tempSum / 10);
    cur.next = new ListNode(tempSum % 10);
    cur = cur.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return head.next;
}
