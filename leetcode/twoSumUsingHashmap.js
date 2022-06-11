/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let i = 0;
  let obj = {};
  while (i < nums.length) {
    if (!obj.hasOwnProperty(nums[i])) {
      obj[nums[i]] = i;
    } else {
      let indexArray = [obj[nums[i]]];
      indexArray.push(i);
      obj[nums[i]] = indexArray;
    }
    i++;
  }
  i = 0;
  for (let i in obj) {
    const checker = obj[target - Number.parseInt(i)];
    if (checker && !Array.isArray(checker)) {
      return [obj[i], checker];
    } else {
      if (!checker) {
        continue;
      }
      if (Number.parseInt(i) === target - Number.parseInt(i)) {
        return obj[i];
      } else {
        return [i, checker[0]];
      }
    }
  }
};

console.log(twoSum([3, 2, 3], 6));

// Time complexity => O(N)
// This solution uses HashMap and the TC has been minimised from O(n^2)
// by compromising a O(1) SC

// Space complexity => O(n)
// Because we are using Hashmap to store the entire input
// This is greater when compated to the nested loop approach which has O(1) SC
