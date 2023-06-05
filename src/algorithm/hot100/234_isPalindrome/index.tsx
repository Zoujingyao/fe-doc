import { ListNode, ArrayToList } from '../../util';

export default () => {
  function isPalindrome(head: ListNode | null): boolean {
    if (head === null) return true;
    // 确定链表长度
    let len: number = 0;
    let ptr: ListNode | null = head;
    while (ptr !== null) {
      len++;
      ptr = ptr.next;
    }
    let halfLen = Math.floor(len / 2);
    const isOdd: boolean = len % 2 === 1;
    // 存储前一半链表值，到后一半开始比对弹出，如果有不匹配的返回false；
    const stack: number[] = [];
    ptr = head;
    while (halfLen && ptr) {
      stack.push(ptr.val);
      halfLen--;
      ptr = ptr?.next;
    }
    if (isOdd) {
      ptr = ptr!.next;
    }
    debugger;
    while (ptr) {
      if (ptr.val !== stack.pop()) {
        return false;
      }
      ptr = ptr.next;
    }
    return ptr === null && !stack.length;
  }

  console.log(isPalindrome(ArrayToList([1, 2, 2, 1])));

  return 'isPalindrome';
};
