import { ListNode, TraverseList } from '../../util';

export default () => {
  function sortList_quickSort(head: ListNode | null): ListNode | null {
    // 递归
    function quickSortList(l: ListNode | null): ListNode | null {
      // 没有元素或有一个元素的链表已经是有序的
      if (l === null || l.next === null) return l;
      // partition操作
      const smallerList = new ListNode();
      const largerList = new ListNode();
      let ptr: ListNode | null = l,
        sPtr: ListNode | null = smallerList,
        lPtr: ListNode | null = largerList;
      const partitionVal = l.val;
      ptr = ptr.next;
      while (ptr) {
        const temp = ptr.val;
        if (temp <= partitionVal) {
          sPtr.next = new ListNode(temp);
          sPtr = sPtr.next;
        } else {
          lPtr.next = new ListNode(temp);
          lPtr = lPtr.next;
        }
        ptr = ptr.next;
      }
      // 分治，分别对smallerList和largerList进行快速排序
      const l1 = quickSortList(smallerList.next);
      const l2 = quickSortList(largerList.next);
      // 合并l1->partition->l2;
      const mergeList = new ListNode();
      mergeList.next = l1;
      ptr = mergeList;
      while (ptr?.next) {
        ptr = ptr.next;
      }
      ptr.next = new ListNode(partitionVal);
      ptr = ptr.next;
      ptr.next = l2;
      return mergeList.next;
    }

    return quickSortList(head);
  }

  const list = new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(1))));
  TraverseList(list);
  TraverseList(sortList_quickSort(list));

  return '077_sortList_quickSort';
};
