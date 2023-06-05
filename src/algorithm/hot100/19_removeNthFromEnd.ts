import { ListNode } from '../util';

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head === null) return null;
  const res = new ListNode();
  res.next = head;
  let slow: ListNode | null, fast: ListNode | null;
  slow = res;
  fast = res;
  let fastStep = n;
  // 快指针先走n步
  while (fastStep > 0) {
    fast = fast?.next!; // 题目保证n的长度在链表范围内
    fastStep = fastStep - 1;
  }
  // 快慢指针同时走，直到fast指向链表尾
  while (fast.next !== null) {
    slow = slow?.next!;
    fast = fast?.next;
  }
  // 此时slow指针指向要删除的节点的上一个节点
  slow.next = slow.next?.next!;
  return res.next;
}

function traverseList(head: ListNode | null) {
  while (head !== null) {
    console.log(head.val, ', ');
    head = head.next;
  }
}

let testHead = new ListNode(1);
let removeNthFromEnd_testHead = removeNthFromEnd(testHead, 1);
traverseList(removeNthFromEnd_testHead);
