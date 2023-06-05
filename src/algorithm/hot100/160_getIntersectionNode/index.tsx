import { ListNode } from '../../util';

export default () => {
  function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    const aNodes: Set<ListNode> = new Set<ListNode>();
    let cur = headA;
    while (cur) {
      aNodes.add(cur);
      cur = cur.next;
    }
    cur = headB;
    while (cur) {
      if (aNodes.has(cur)) {
        return cur;
      }
      cur = cur.next;
    }
    return null;
  }

  function getIntersectionNode_optimizeSpace(
    headA: ListNode | null,
    headB: ListNode | null,
  ): ListNode | null {
    if (headA === null || headB === null) return null;
    let lenA = 0,
      lenB = 0;
    let pA: ListNode | null = headA,
      pB: ListNode | null = headB;
    while (pA !== null) {
      lenA++;
      pA = pA.next;
    }
    while (pB !== null) {
      lenB++;
      pB = pB.next;
    }
    pA = headA;
    pB = headB;

    let diff = Math.abs(lenA - lenB);
    if (lenA > lenB) {
      while (diff) {
        pA = pA!.next;
        diff--;
      }
    } else if (lenA < lenB) {
      while (diff) {
        pB = pB!.next;
        diff--;
      }
    }

    while (pA !== null && pB !== null) {
      if (pA === pB) return pA;
      pA = pA!.next;
      pB = pB!.next;
    }
    return null;
  }

  function getIntersectionNode_final(
    headA: ListNode | null,
    headB: ListNode | null,
  ): ListNode | null {
    if (headA === null || headB === null) return null;
    let pA: ListNode | null = headA;
    let pB: ListNode | null = headB;
    while (pA !== pB) {
      pA = pA === null ? headB : pA.next;
      pB = pB === null ? headA : pB.next;
    }
    return pA;
  }

  return '160_getIntersectionNode';
};
