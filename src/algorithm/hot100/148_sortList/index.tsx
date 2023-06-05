import { ListNode, MergeTwoLists } from '../../util';

export default () => {
  function sortList(head: ListNode | null): ListNode | null {
    if (head === null) {
      return head;
    }
    let length = 0;
    let node: ListNode | null = head;
    while (node !== null) {
      length++;
      node = node.next;
    }

    // 哨兵节点
    const dummyHead = new ListNode(0, head);

    for (let subLength = 1; subLength < length; subLength <<= 1) {
      let prev = dummyHead,
        curr = dummyHead.next;
      // 每次拆两个subLength的链表合并，直到整个链表都两两合并；
      while (curr !== null) {
        // 先拆分两个subLength的链表，头指针分别为hea1和head2；
        const head1 = curr;
        for (let i = 1; i < subLength && curr.next !== null; i++) {
          curr = curr.next;
        }
        const head2 = curr.next;
        // 第一个subLength长的链表，记得断开
        curr.next = null;
        curr = head2;
        for (let i = 1; i < subLength && curr != null && curr.next !== null; i++) {
          curr = curr.next;
        }
        // 链表后面的部分先用next记录
        let next = null;
        if (curr !== null) {
          next = curr.next;
          // 后面还有，记得把后面和第二个subLength的链表断开
          curr.next = null;
        }

        // 合并head1和head2两个链表，并更新到prev后面，prev总是在排好序的列表最后一个，也可以说是未排序链表的前驱节点；
        prev.next = MergeTwoLists(head1, head2);
        while (prev.next !== null) {
          prev = prev.next;
        }
        // curr继续指向未排序的部分
        curr = next;
      }
    }
    return dummyHead.next;
  }

  return 'sortList';
};
