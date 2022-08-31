/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinations(ans, ds, arr, j, sum, target, ansObject) {
  if (sum === target) {
    if (!ansObject[ds]) {
      ans.push([...ds]);
      ansObject[ds] = true;
    }
  } else if (sum > target) {
    return;
  } else {
    for (let i = j; i < arr.length; i++) {
      ///logic to avoid duplicate branches in state space tree
      if (i !== j && arr[i] === arr[i - 1]) {
        continue;
      }
      ds.push(arr[i]);
      combinations(ans, ds, arr, i + 1, sum + arr[i], target, ansObject);
      ds.pop(arr[i]);
    }
  }
}

var combinationSum2 = function (candidates, target) {
  let ans = [];
  let ds = [];
  let sum = 0;
  let ansObject = {};
  candidates.sort((x, y) => x - y);
  combinations(ans, ds, candidates, 0, sum, target, ansObject);
  return ans;
};
