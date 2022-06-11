/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function binarySearch(nums, target, start, end) {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return true;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
}

var fourSum = function (nums, target) {
  let n = nums.length;
  let op = [];
  nums.sort((x, y) => x - y);
  for (let i = 0; i < n - 3; i++) {
    for (let j = i + 1; j < n - 2; j++) {
      for (let k = j + 1; k < n - 1; k++) {
        //binary implementation
        const requiredElement = target - (nums[i] + nums[j] + nums[k]);
        const isfourthElementPresent = binarySearch(
          nums,
          requiredElement,
          k + 1,
          n
        );

        if (isfourthElementPresent) {
          let opInsert = [nums[i], nums[j], nums[k], requiredElement];
          opInsert.sort();
          let flag = true;
          for (let m = 0; m < op.length; m++) {
            if (JSON.stringify(op[m]) === JSON.stringify(opInsert)) {
              flag = false;
            }
          }
          if (flag) {
            op.push(opInsert);
          }
        }
      }
    }
  }
  return op;
};

console.log(
  fourSum([7, 7, -1, -5, 2, -2, 8, -8, -10, 0, 1, -4, -1, 4, -6, 5, 4], -21)
);

// Time complexity => O(n^3 * log n)
// n^3 => because of 3 nested FOR loops
// log n => because of binary search for the 4th element

//SC => (M *4)
// M -> number of quads
