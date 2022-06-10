/**
 * @param {number[]} nums
 * @return {number}
 */
 let count = 0;
 function merge(nums, left, right) {
   let i = 0,
     j = 0,
     k = 0;
   while (i < left.length && j < right.length) {
     if (left[i] > 2 * right[j]) {
       count += left.length - i;
       j++;
     } else {
       i++;
     }
   }
   i = 0;
   j = 0;
   k = 0;
   while (i < left.length && j < right.length) {
     if (left[i] > right[j]) {
       nums[k] = right[j];
       j++;
       k++;
     } else {
       nums[k] = left[i];
       i++;
       k++;
     }
   }
   while (i < left.length) {
     nums[k] = left[i];
     i++;
     k++;
   }
   while (j < right.length) {
     nums[k] = right[j];
     j++;
     k++;
   }
 }
 
 function recursiveSplit(nums) {
   if (nums.length < 2) return;
   let start = 0;
   let end = nums.length;
   let mid = Math.floor((start + end) / 2);
   const left = nums.slice(0, mid);
   const right = nums.slice(mid, end);
   recursiveSplit(left);
   recursiveSplit(right);
   merge(nums, left, right);
 }
 var reversePairs = function (nums) {
   recursiveSplit(nums);
   let result = count;
   count = 0;
   return result;
 };


// Time complexity => O(n * log n) => using merge sort
// can use nested for loop to solve this -> merge sort is used to optimise the solution

// Space complexity => O(n)
 