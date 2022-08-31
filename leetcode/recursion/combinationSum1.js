/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

function combinations(
  candidates,
  target,
  ans,
  ds,
  ansObj,
  sum,
  loopStartVariable
) {
  for (let i = loopStartVariable; i < candidates.length; i++) {
    ds.push(candidates[i]);
    sum += candidates[i];
    if (sum === target) {
      let sortedDs = [...ds].sort((x, y) => x - y);
      if (!ansObj[sortedDs]) {
        ans.push(sortedDs);
        ansObj[sortedDs] = true;
      }

      ds.pop(candidates[i]);
      return;
    } else if (sum > target) {
      ds.pop(candidates[i]);
      return;
    } else {
      combinations(candidates, target, ans, ds, ansObj, sum, i);
    }
    ds.pop(candidates[i]);
    sum -= candidates[i];
  }
}

var combinationSum = function (candidates, target) {
  let ans = [];
  let ds = [];
  let sum = 0;
  let ansObj = {};
  candidates.sort((x, y) => x - y);
  combinations(candidates, target, ans, ds, ansObj, sum, 0);
  return ans;
};
