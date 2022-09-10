/**
 * @param {string} s
 * @return {string[][]}
 */

// aabb
// 0123
var partition = function (s) {
  let partitions = [];
  let ans = [];

  var checkPalindrome = (str) => {
    if (str === "") {
      return true;
    } else if (str[0] !== str[str.length - 1]) {
      return false;
    } else {
      return checkPalindrome(str.substr(1, str.length - 2));
    }
  };
  var partitionCreator = (s) => {
    if (s === "") {
      ans.push([...partitions]);
      return;
    }
    for (let i = 1; i <= s.length; i++) {
      let substr = s.substring(0, i);
      if (checkPalindrome(substr)) {
        partitions.push(substr);
        partitionCreator(s.substring(i, s.length));
        partitions.pop();
      } else {
        continue;
      }
    }
  };
  partitionCreator(s);
  return ans;
};
