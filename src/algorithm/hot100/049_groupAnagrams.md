---
group:
  title: 热题100
  path: /algorithm/hot100
---

# [49. 字母异位词分组](https://leetcode.cn/problems/group-anagrams/?favorite=2cktkvj)

## 思路

可以把每个字符串按照字典序排序后，变成数字，然后将这个作为唯一键；用一个 map 保存所有键相同的字符串组成的数组。

keywords: 哈希表

## 代码

```typescript
function groupAnagrams(strs: string[]): string[][] {
  const charToNumMap = new Map();
  for (let i = 0; i < 26; i++) {
    charToNumMap.set(String.fromCharCode(97 + i), i + 1);
  }

  /**
   * @description 将字符串按字典序解析成数字拼接的字符串：bfc -> bcf -> 236
   * @param str 待转换的字符串
   */
  function strToUniq(str: string): string {
    let array = Array.from(str);
    array.sort();
    return array.toString();
  }

  /**
   * @description 将字符串按字符串顺序解析成数字：bfc -> bcf -> 2*26^1 + 3*26^2 +6*26^3 = 4+12+48=64
   * TODO 为什么不对，错误的输入用例太长了找不到错误的地方，单词最大100，26^100应该是溢出了, number最大大概16位
   * @param str 待转换的字符串
   */
  function strToNum(str: string): number {
    let nums: number[] = [];
    for (let i = 0; i < str.length; i++) {
      nums.push(charToNumMap.get(str[i]));
    }
    nums.sort((a, b) => a - b);
    let res: number = 0;
    for (let i = 0; i < nums.length; i++) {
      res += nums[i] * Math.pow(26, i + 1);
    }
    console.log('res: ', res);
    return res;
  }

  const numToArrMap = new Map();
  // let key: number;
  let key: string;
  for (let i = 0; i < strs.length; i++) {
    // key = strToNum(strs[i]);
    key = strToUniq(strs[i]);
    let list = numToArrMap.get(key) ? numToArrMap.get(key) : [];
    list.push(strs[i]);
    numToArrMap.set(key, list);
  }
  return Array.from(numToArrMap.values());
}

console.log(groupAnagrams(['understatements', '']));
```
