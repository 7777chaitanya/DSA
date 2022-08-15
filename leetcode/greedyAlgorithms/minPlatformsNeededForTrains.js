function findPlatform(arr, dep, n) {
  //your code here
  arr.sort((x, y) => x - y);
  dep.sort((x, y) => x - y);
  let platforms = [dep[0]];
  for (let i = 1; i < n; i++) {
    let flag = true;
    for (let j = 0; j < platforms.length; j++) {
      if (arr[i] > platforms[j]) {
        platforms[j] = dep[i];
        flag = false;
        break;
      }
    }
    if (flag) {
      platforms.push(dep[i]);
    }
  }
  return platforms.length;
}

let arr = [0900, 0940, 0950, 1100, 1500, 1800];
let dep = [0910, 1200, 1120, 1130, 1900, 2000];
let n = 6;
findPlatform(arr, dep, n);

// SC
// O(n) => to store the platforms for output

// TC 
// O(n^2) => 
// sort function takes O(n^2) in JS, this can be improved using merge sort
// iterating each train arrival time with platforms Array, 
// In Worst case, If all the train timings collide, the platforms array might contain n items

// https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1#
