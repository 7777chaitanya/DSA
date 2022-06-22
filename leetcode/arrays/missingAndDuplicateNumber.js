/**
 * @param {number[]} nums
 * @return {number}
 */

// leetcode 268 modified

//return the missing number & duplicate number;

var missingNumber = function (nums) {
  let duplicate;
  let missingNumber;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[nums[i] - 1] > 0) {
      nums[nums[i] - 1] = -nums[nums[i] - 1];
    } else {
      duplicate = nums[i];
    }
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      missingNumber = i + 1;
    }
  }
  console.log({ missingNumber, duplicate });
};

missingNumber([3, 1, 2, 5, 4, 6, 7, 5]);

// Time complexity => O(n)
// because we are interating the whole array once

// space complexity => O(1)
// becase we don't consume extra space across various sizes of input
