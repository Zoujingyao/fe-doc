---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [208. 实现 Trie (前缀树)](https://leetcode.cn/problems/implement-trie-prefix-tree/?favorite=2cktkvj)

## 思路

要注意的点：TrieNode 中可能存在前缀相同的单词例如 apple 和 app，所以节点还需要有一个属性 end 标识是否为单词尾；

那么 TrieNode 的属性应该有三个：

```text
// 数据域 - 26个字母分别对应0-25
data: number;
// 孩子节点数组，共26个孩子，默认为空
children: TrieNode[];
// 该节点是否为单词末尾
end: boolean;
```

## 代码

<code src='./index.tsx'></code>
