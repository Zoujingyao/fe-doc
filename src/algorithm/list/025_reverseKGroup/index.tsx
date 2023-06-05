import React from 'react';
import { ListNode, ArrayToList, ReverseList, TraverseList } from '../../util';

export default () => {
  function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    debugger;
    if (head === null) return head;
    const dummyNode = new ListNode();
    dummyNode.next = head;
    let pre: ListNode = dummyNode;
    let cur: ListNode | null = pre.next;
    let start: ListNode | null;
    while (cur) {
      let step = k - 1;
      // 每次翻转k个节点
      let isNeedReverse = true;
      start = cur;
      while (step--) {
        if (!cur?.next) {
          isNeedReverse = false;
          break;
        }
        cur = cur.next;
      }
      let next = null;
      if (cur) {
        next = cur.next;
        cur.next = null;
      }
      if (isNeedReverse) {
        pre.next = ReverseList(start);
      } else {
        pre.next = start;
        break;
      }
      cur = next;
      while (pre.next) {
        pre = pre.next;
      }
    }
    return dummyNode.next;
  }

  const listNodes = [1, 2, 3, 4, 5];
  const k = 5;

  const res = reverseKGroup(ArrayToList(listNodes), k);
  TraverseList(res);

  return (
    <div>
      <h1>025_reverseKGroup</h1>
      <p>{`listNodes=${listNodes}, k=${k}, res=${res}`}</p>
    </div>
  );
};
