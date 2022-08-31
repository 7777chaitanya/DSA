/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  //sort the array in descending order so that the logic to avoid duplicates works properly
//   coins.sort((x, y) => y - x);
  let path = [];
  let ans = Number.MAX_SAFE_INTEGER;
  if (amount === 0) return 0;
  //logic for the recursive function;
  const combinationGenerator = (sum, ptr) => {
    if (sum === amount) {
      if (path.length < ans) {
        ans = path.length;
      }
    } else if (sum > amount) {
      return;
    } else {
      for (let i = ptr; i < coins.length; i++) {
        // logic to avoid duplicate branches in state space tree
        // if (i !== ptr && coins[i] === coins[i - 1]) {
        //   continue;
        // }
        path.push(coins[i]);
        combinationGenerator(sum + coins[i], i);
        path.pop();
      }
    }
  };
  combinationGenerator(0, 0);
  return ans === Number.MAX_SAFE_INTEGER ? -1 : ans;
};

coinChange([186, 419, 83, 408], 6249);
