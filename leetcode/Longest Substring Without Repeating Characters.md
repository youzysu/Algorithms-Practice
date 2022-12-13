# 🌈 Longest Substring Without Repeating Characters

> [leetcode](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/)

## 📌 Description

Given a string s, find the length of the longest substring without repeating characters.

### Example 1:

```js
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

### Example 2:

```js
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

### Example 3:

```js
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

### Constraints:

- 0 <= s.length <= 5 \* 10<sup>4</sup>
- s consists of English letters, digits, symbols and spaces.

<br />

## 📌 My solution

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let seen = {};
  let noRepeatStartPoint = 0;
  let longestLength = 0;

  for (let currentIndex = 0; currentIndex < s.length; currentIndex++) {
    const char = s[currentIndex];
    const currentPoint = currentIndex + 1;

    if (seen[char]) {
      noRepeatStartPoint = Math.max(seen[char], noRepeatStartPoint);
    }

    const candidate = currentPoint - noRepeatStartPoint;
    longestLength = Math.max(longestLength, candidate);
    seen[char] = currentPoint;
  }

  return longestLength;
};
```

### Example

```js
findLongestSubstring('thecatinthehat'); // 7 hecatin
```

| index | char | point |  noRepeatStartPoint  |  candidate  | longestLength | seen                                          |
| :---: | :--: | :---: | :------------------: | :---------: | :-----------: | --------------------------------------------- |
|   0   |  t   |   1   |          0           |      1      |       1       | {t:1}                                         |
|   1   |  h   |   2   |          0           |      2      |       2       | {t:1, h:2}                                    |
|   2   |  e   |   3   |          0           |      3      |       3       | {t:1, h:2, e:3}                               |
|   3   |  c   |   4   |          0           |      4      |       4       | {t:1, h:2, e:3, c:4}                          |
|   4   |  a   |   5   |          0           |      5      |       5       | {t:1, h:2, e:3, c:4, a:5}                     |
|   5   |  t   |   6   |  Math.max(1, 0) = 1  |  6 - 1 = 5  |       5       | {**_t:6_**, h:2, e:3, c:4, a:5}               |
|   6   |  i   |   7   |          1           |  7 - 1 = 6  |       6       | {t:6, h:2, e:3, c:4, a:5, i:7}                |
|   7   |  n   |   8   |          1           |  8 - 1 = 7  |       7       | {t:6, h:2, e:3, c:4, a:5, i:7, n:8}           |
|   8   |  t   |   9   |  Math.max(6, 1) = 6  |  9 - 6 = 3  |       7       | {**_t:9_**, h:2, e:3, c:4, a:5, i:7, n:8}     |
|   9   |  h   |  10   |  Math.max(2, 6) = 6  | 10 - 6 = 4  |       7       | {t:9, **_h:10_**, e:3, c:4, a:5, i:7, n:8}    |
|  10   |  e   |  11   |  Math.max(3, 6) = 6  | 11 - 6 = 5  |       7       | {t:9, h:10, **_e:11_**, c:4, a:5, i:7, n:8}   |
|  11   |  h   |  12   | Math.max(10, 6) = 10 | 12 - 10 = 2 |       7       | {t:9, **_h:12_**, e:11, c:4, a:5, i:7, n:8}   |
|  12   |  a   |  13   | Math.max(5, 10) = 10 | 13 - 10 = 3 |       7       | {t:9, h:12, e:11, c:4, **_a:13_**, i:7, n:8}  |
|  13   |  t   |  14   | Math.max(9, 10) = 10 | 14 - 10 = 4 |       7       | {**_t:14_**, h:12, e:11, c:4, a:13, i:7, n:8} |

### Complexity

- Time: O(n) - Runtime 137 ms
- Space: O(n) - Memory 48.6 MB

<br />

## 📌 Other Solutions

## ✏️ Memo
