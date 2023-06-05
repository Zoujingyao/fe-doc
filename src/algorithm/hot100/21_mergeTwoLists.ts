import { ListNode, ArrayToList, TraverseList, MergeTwoLists } from '../util';

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 === null) return list2;
  if (list2 === null) return list1;
  let pointer = new ListNode();
  const head = pointer;
  let l1: ListNode | null = list1,
    l2: ListNode | null = list2;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      pointer.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      pointer.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    if (pointer.next) pointer = pointer.next;
  }
  if (l1) pointer.next = l1;
  if (l2) pointer.next = l2;
  return head.next;
}

function arrayToList(arr: number[]): ListNode | null {
  if (!arr.length) return null;
  let pointer = new ListNode();
  const head = pointer;
  for (let i = 0; i < arr.length; i++) {
    pointer.next = new ListNode(arr[i]);
    pointer = pointer.next;
  }
  return head.next;
}

function traverse(list: ListNode | null): void {
  let res = '';
  while (list !== null) {
    res = res + `${list.val}, `;
    list = list.next;
  }
  console.log(res);
}

const l1 = ArrayToList([1, 2, 3]);
// traverse(l1);
const l2 = ArrayToList([1, 2, 4]);
// traverse(l2);
const mergeList = MergeTwoLists(l1, l2);
TraverseList(mergeList);
