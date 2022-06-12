/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = 1;
  }
  for (let i in obj) {
    if (!obj[Number.parseInt(i) - 1] && !obj[Number.parseInt(i) + 1]) {
      continue;
    } else if (obj[Number.parseInt(i) - 1] && obj[Number.parseInt(i) + 1]) {
      obj[i] = "middle";
    } else if (!obj[Number.parseInt(i) - 1] && obj[Number.parseInt(i) + 1]) {
      obj[i] = "first";
    } else {
      obj[i] = "last";
    }
  }
  let first = [];
  let last = [];

  for (let i in obj) {
    if (obj[i] === "first") {
      first.push(Number.parseInt(i));
    }
    if (obj[i] === "last") {
      last.push(Number.parseInt(i));
    }
  }
  first.sort((x, y) => x - y);
  last.sort((x, y) => x - y);
  let maxCount = 0;
  if (nums.length === 0) return maxCount;
  for (let i = 0; i < first.length; i++) {
    if (last[i] - first[i] > maxCount) {
      maxCount = last[i] - first[i];
    }
  }
  return maxCount + 1;
};

//Assume the length of the first & last arrays = f
// TC => O(n) + (f * log(f))
// f * log(f) => TC to sort first and last arrays

// SC => O(n)

longestConsecutive([1, -8, 7, -2, -4, -4, 6, 3, -4, 0, -7, -1, 5, 1, -9, -3]);
