// Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ? val : 0;
    this.next = next ? next : null;
  }
}

export function ArrayToList(nums: number[]): ListNode | null {
  if (!nums.length) return null;
  const head = new ListNode(nums[0]);
  let p = head;
  for (let i = 1; i < nums.length; i++) {
    p.next = new ListNode(nums[i]);
    p = p.next;
  }
  return head;
}

export function TraverseList(head: ListNode | null) {
  let res = '';
  let ptr = head;
  while (ptr) {
    res += `${ptr.val},`;
    ptr = ptr.next;
  }
  console.log(res);
}

export function MergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 === null) return list2;
  if (list2 === null) return list1;
  const head = new ListNode();
  let ptr: ListNode | null = head,
    ptr1: ListNode | null = list1,
    ptr2: ListNode | null = list2;
  while (ptr1 && ptr2) {
    if (ptr1.val <= ptr2.val) {
      ptr.next = ptr1;
      ptr1 = ptr1.next;
    } else {
      ptr.next = ptr2;
      ptr2 = ptr2.next;
    }
    ptr = ptr.next;
  }
  if (ptr1) ptr.next = ptr1;
  if (ptr2) ptr.next = ptr2;
  return head.next;
}

export function GetListLength(head: ListNode | null): number {
  let listLength = 0;
  if (head === null) return listLength;
  let p: ListNode | null = head;
  while (p) {
    listLength++;
    p = p.next;
  }
  return listLength;
}

export function ReverseList(head: ListNode | null): ListNode | null {
  if (!head) return head;
  let pre = null,
    cur: ListNode | null = head;
  let temp;
  while (cur) {
    temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
}

export function FindMiddleNode(head: ListNode | null): ListNode | null {
  if (!head) return head;
  let slow: ListNode = head,
    fast: ListNode | null = head;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next!;
  }
  return slow;
}
