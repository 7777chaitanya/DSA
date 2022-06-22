/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let len = nums.length;
  let n = Math.floor(len / 3);
  let countObject = {};
  for (let i = 0; i < len; i++) {
    if (countObject.hasOwnProperty(nums[i])) {
      countObject[nums[i]] += 1;
    } else {
      countObject[nums[i]] = 1;
    }
  }
  let output = [];
  for (const count in countObject) {
    if (countObject[count] > n) {
      output.push(Number.parseInt(count));
    }
  }
  return output;
};

// Time complexity => O(n)
// Because we are iterating the whole input array atleast once

// space complexity => O(n)
// Because we are using an JS object to keep track of the count of different integers