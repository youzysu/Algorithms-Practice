# 🌈 Palindrome Number

> [leetcode](https://leetcode.com/problems/palindrome-number/description/)

## 📌 Description

Given an integer x, return true if x is a palindrome, and false otherwise.

### Example 1:

```js
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
```

### Example 2:

```js
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

### Example 3:

```js
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```

### Constraints:

- -2<sup>31</sup> <= x <= 2<sup>31</sup> - 1

### Follow up:

Could you solve it without converting the integer to a string?

<br />

## 📌 Solution #01

- Recursion

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const strNumber = x.toString();
  if (strNumber.length < 2) return true;
  return strNumber.slice(0, 1) === strNumber.slice(-1)
    ? isPalindrome(strNumber.slice(1, -1))
    : false;
};
```

### Complexity

- Time: Runtime 161 ms
- Space: O(n) - Memory 51.7 MB

<br />

## 📌 Solution #02

- Iteration, Multiple Pointer

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const str = x + '';
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left += 1;
    right -= 1;
  }
  return true;
};
```

### Complexity

- Time: Runtime 188 ms
- Space: Memory 50.7 MB

<br />

## 📌 Solution #03

- Without converting the integer to a string

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const reversed = reverseNumber(x);
  return reversed === x;
};

const reverseNumber = (num) => {
  let reversed = 0;
  let temp = num;

  while (temp > 0) {
    reversed = reversed * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }

  return reversed;
};
```

### Complexity

- Time: Runtime 166 ms
- Space: Memory 50.2 MB 🤢

<br />

## ✏️ Memo

- 흠.. 무엇이 좋은 Solution일까.. 시간 복잡도, 공간 복잡도로 판단하기 아직 어렵다.
