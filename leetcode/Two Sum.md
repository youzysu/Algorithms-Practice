# 🎮 Two Sum

> [leetcode](https://leetcode.com/problems/two-sum/description/)

## 📌 Description

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

### Example 1:

```js
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

### Example 2:

```js
Input: (nums = [3, 2, 4]), (target = 6);
Output: [1, 2];
```

### Example 3:

```js
Input: (nums = [3, 3]), (target = 6);
Output: [0, 1];
```

### Constraints:

- 2 <= nums.length <= 104
- -10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>
- -10<sup>9</sup> <= target <= 10<sup>9</sup>
- Only one valid answer exists.

**Follow-up**: Can you come up with an algorithm that is less than O(n<sup>2</sup>) time complexity?

<br />

## 📌 My solution

- 자료구조 Map을 활용한다.
- 배열 nums를 순회하면서 map의 key에 해당 숫자를, value에 index를 저장한다.
- map에 현재 숫자와의 합이 target인 숫자가 저장되어 있는 경우 각 숫자의 index를 반환한다.

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }
    map.set(nums[i], i);
  }
};
```

### Result

- Runtime: 105 ms submission
- Memory: 43.3 MB

<br />

## 📌 Other Solutions

### 1. Runtime 45 ms submission

- 기본 Object로 key-value를 저장하여 푼 경우

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const seen = {};

  for (let i = 0; i < nums.length; i++) {
    const firstNum = nums[i];
    const secondNum = target - firstNum;
    if (secondNum in seen) {
      return [seen[secondNum], i];
    }
    seen[firstNum] = i;
  }

  return [0, 0];
};
```

### 2. Memory 31.4 MB submission

- 기본적인 중첩 반복문으로 푼 경우
- O(n<sup>2</sup>)

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
  return null;
};
```

## ✏️ Memo

- 일반 객체 리터럴이랑 Map이랑 왜 런타임 차이가 있는지 궁금하다.
- Map 익숙해질겸 써봤는데 key에 객체 타입을 넣어야 할 때가 아니라면 기본 객체 쓰는게 더 낫겠다.
