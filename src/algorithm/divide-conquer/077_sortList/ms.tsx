import { ListNode, TraverseList, GetListLength, MergeTwoLists } from '../../util';

export default () => {
  function sortList_mergeSort(head: ListNode | null): ListNode | null {
    // debugger;
    // 边界处理
    if (head === null) return head;
    // 计算链表长度
    const listLength = GetListLength(head);

    const dummyHead = new ListNode(0, head);
    for (let subLength = 1; subLength < listLength; subLength <<= 1) {
      // 自底向上
      let prev = dummyHead;
      // 注意subLength更新时，cur要指向要处理的链表首，第一次应该是head，所以dummyHead初始化成head，兼容第一次和后续
      let cur: ListNode | null = dummyHead.next;
      while (cur !== null) {
        // 每次取出两个长度为subLength的子链表合并；
        const head1: ListNode | null = cur;
        // 走subLength-1步，到达子链表1的末尾
        for (let i = 1; i < subLength && cur.next != null; i++) {
          cur = cur.next;
        }
        const head2: ListNode | null = cur.next;
        cur.next = null;
        cur = head2;
        for (let i = 1; i < subLength && cur != null && cur.next != null; i++) {
          cur = cur.next;
        }
        // 拆了两个子链表后后面先用next记录
        let next = null; // 先设置为null
        if (cur !== null) {
          // 如果cur不是空节点，说明后面还有要遍历的，如果cur是null，说明是最后一段子链表了
          next = cur.next;
          cur.next = null;
        }

        // 合并head1和head2
        prev.next = MergeTwoLists(head1, head2);
        // 更新prev到处理完的链表末尾
        while (prev.next != null) {
          prev = prev.next;
        }
        // 更新cur到待处理链表头
        cur = next;
      }
    }
    return dummyHead.next;
  }

  const list = new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(1))));
  TraverseList(list);
  console.log(GetListLength(list));
  TraverseList(sortList_mergeSort(list));

  return '077_sortList_mergeSort';
};
