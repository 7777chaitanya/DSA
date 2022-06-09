/**
 * @param {number[]} nums
 * @return {number}
 */

// referred to solution before solving
// learnt an application of binary search to reduce time complexity
var findDuplicate = function (nums) {
  let duplicate;
  let n = nums.length;
  let start = 1;
  let end = n - 1;
  while (end >= start) {
    let mid = Math.floor((start + end) / 2);
    let count = 0;
    for (let i = 0; i < n; i++) {
      if (nums[i] <= mid) {
        count++;
      }
    }
    if (count > mid) {
      duplicate = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return duplicate;
};

// Time complexity => n * log n
// log N for binary search
// n for finding the count of lowest numbers than mid

// Space complexity => O(1)





