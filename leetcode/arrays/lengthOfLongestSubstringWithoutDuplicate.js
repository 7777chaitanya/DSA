/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let set = new Set();
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    if (!set.has(s[windowEnd])) {
      set.add(s[windowEnd]);
    } else {
      while (set.has(s[windowEnd]) === true) {
        set.delete(s[windowStart]);
        windowStart++;
      }
      set.add(s[windowEnd]);
    }
    let windowLength = windowEnd - windowStart + 1;
    if (windowLength > maxLength) {
      maxLength = windowLength;
    }
  }
  return maxLength;
};

// TC
// Best case => O(n) => if string has all distinct characters
// Worstcase => O(n ^ 2) => if there is a duplicate character in the string

//SC => O(n) => as we are using set DS to store substring characters 
// If only the last 2 characters in the substring are duplicate, then we need
// -to store all characters except the last one in the set.