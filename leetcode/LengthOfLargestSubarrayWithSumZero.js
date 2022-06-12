function LengthOfLargestSubarrayWithSumZero(arr) {
  let n = arr.length;
  let maxLength = 0;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      if (sum === 0) {
        if (j - i > maxLength) {
          maxLength = j - i + 1;
        }
      }
    }
  }
  return maxLength;
}

console.log(LengthOfLargestSubarrayWithSumZero([6, -2, 2, -8, 1, 7, 4, -10]));
console.log(LengthOfLargestSubarrayWithSumZero([9, -3, 3, -1, 6, -5]));

// TC => O(n^2)
// There is a O(n) solution -> refer to solutions
// because of nested for-loop

// SC => O(1)
// The space used by our program is constant across different sizes of input
