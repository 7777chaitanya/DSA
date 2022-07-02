/**
 * @param {number[]} nums
 * @return {number}
 */

function countOfJ(nums, i, j) {
  let k = nums[j];
  let count = 0;
  while (j < nums.length) {
    if (nums[j] === k) {
      count++;
      j++;
    } else {
      break;
    }
  }
  return count;
}

var removeDuplicates = function (nums) {
  let i = 0;
  let j = 0;
  while (j < nums.length) {
    nums[i] = nums[j];
    i++;
    j += countOfJ(nums, i, j);
    if (j > nums.length - 1) {
      return i;
    }
  }
  return i;
};

// TC => O(n) => We are iterating the array only once
// SC => O(1) => we are using constant space across different input sizes
