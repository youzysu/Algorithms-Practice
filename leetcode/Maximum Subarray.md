# 🌈 Maximum Subarray

> [leetcode](https://leetcode.com/problems/maximum-subarray/)

## 📌 Description

Given an integer array nums, find the **subarray** which has the largest sum and return its sum.

### Example 1:

```js
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

### Example 2:

```js
Input: nums = [1];
Output: 1;
```

### Example 3:

```js
Input: nums = [5, 4, -1, 7, 8];
Output: 23;
```

### Constraints:

- 1 <= nums.length <= 10<sup>5</sup>
- -10<sup>4</sup> <= nums[i] <= 10<sup>4</sup>

**Follow-up**: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

<br />

## 📌 Trial

### Approach

- Time Limit Exceeded

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let tempMax = 0;
  let maxSum = -Infinity;

  for (let length = 1; length <= nums.length; length++) {
    const lengthMaxSum = maxSubArrayByLength(nums, length);
    tempMax = lengthMaxSum;
    maxSum = Math.max(tempMax, maxSum);
  }

  return maxSum;
};

const maxSubArrayByLength = (nums, length) => {
  const tempSubArray = nums.slice(0, length);
  let tempSum = tempSubArray.reduce((acc, cur) => acc + cur);
  let maxSum = tempSum;

  for (let i = 0; i < nums.length - length; i++) {
    tempSum = tempSum - nums[i] + nums[i + length];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
};
```

### Result

- Runtime: 105 ms submission
- Memory: 43.3 MB

<br />

## 📌 Other Solutions

### 1. divide and conquer approach

## ✏️ Memo
