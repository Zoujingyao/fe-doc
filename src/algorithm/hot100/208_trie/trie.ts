/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

class TrieNode {
  // 数据域 - 26个字母分别对应0-25
  data: number;
  // 孩子节点数组，共26个孩子，默认为空
  children: TrieNode[];
  // 该节点是否为单词末尾
  end: boolean;

  constructor(data?: number) {
    this.data = data !== undefined ? data : 0;
    // 每个节点默认有26个空孩子
    this.children = new Array(26).fill(null);
    this.end = false;
  }
}

export class Trie {
  head: TrieNode;
  map: Map<string, number> = new Map<string, number>();

  constructor() {
    this.head = new TrieNode();
    for (let i = 0; i < 26; i++) {
      this.map.set(String.fromCharCode(97 + i), i);
    }
  }

  private static isLeafNode(node: TrieNode): boolean {
    if (node === null) return false;
    for (let i = 0; i < node.children.length; i++) {
      if (node.children[i] !== null) return false;
    }
    return true;
  }

  // 从head开始根据str遍历，直到遍历到叶子节点（返回该叶子节点p）或者找不到对应的字母（返回遍历到的字符串下标）；
  private traverse(str: string): { p: TrieNode; idx: number } {
    let p: TrieNode = this.head;
    let idx: number = 0,
      next: TrieNode;
    // debugger;
    while (p !== null && idx < str.length) {
      next = p.children[this.map.get(str[idx])!];
      if (next === null) {
        break;
      } else {
        p = next;
      }
      idx++;
    }

    return { p, idx };
  }

  insert(word: string): void {
    let p: TrieNode = this.head;
    let idx: number = 0,
      next: TrieNode,
      curVal: number;
    // debugger;
    while (idx < word.length) {
      curVal = this.map.get(word[idx])!;
      next = p.children[curVal];
      if (next === null) {
        p.children[curVal] = new TrieNode(curVal);
        next = p.children[curVal];
      }
      p = next;
      idx++;
    }
    p.end = true;
  }

  search(word: string): boolean {
    const { p, idx } = this.traverse(word);
    // debugger;
    return idx === word.length && (p.end || Trie.isLeafNode(p));
  }

  startsWith(prefix: string): boolean {
    const { p, idx } = this.traverse(prefix);
    // debugger;
    return idx === prefix.length && p !== null;
  }
}
