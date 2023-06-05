import React from 'react';
import { ListNode, ArrayToList, ReverseList, TraverseList, FindMiddleNode } from '../../util';

export default () => {
  function reorderList(head: ListNode | null): void {
    if (!head || !head.next) return;

    const list1 = head;
    let list2 = null;

    // 快慢指针找到中间节点，截断两部分
    const middle = FindMiddleNode(list1)!;
    list2 = middle.next;
    middle.next = null;

    // reverse list2
    list2 = ReverseList(list2);

    TraverseList(list1);
    TraverseList(list2);

    // 逐元素合并list1, list2;
    let p1: ListNode | null = list1,
      p2: ListNode | null = list2,
      temp1,
      temp2;
    while (p2) {
      temp1 = p1.next!;
      temp2 = p2.next;
      p1.next = p2;
      p2.next = temp1;
      p1 = temp1;
      p2 = temp2;
    }

    console.log('resList: ');
    TraverseList(head);
  }

  const listNodes = [1, 2, 3, 4, 5];
  // const listNodes = [1, 2, 3, 4];

  reorderList(ArrayToList(listNodes));

  return (
    <div>
      <h1>025_reverseKGroup</h1>
      <p>{`listNodes=${listNodes}`}</p>
    </div>
  );
};
