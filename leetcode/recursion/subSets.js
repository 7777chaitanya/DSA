/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function combinations(ans, ds, nums, j) {
  for (let i = j; i < nums.length; i++) {
    ds.push(nums[i]);
    ans.push([...ds]);

    if (i < nums.length - 1) {
      combinations(ans, ds, nums, i + 1);
    }
    ds.pop();
  }
}

var subsets = function (nums) {
  let ans = [];
  let ds = [];
  ans.push([]);
  combinations(ans, ds, nums, 0);
  return ans;
};
