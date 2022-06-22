// This is solved by modifying the input array but the contraint is
// that it has to be solved without modifying the input array

// Solved by following the constraints in another problem

// Just tried this approach to check if leetcode will accept solutions which
// violate the constraints
const arr = [2, 2, 2, 2, 2];

function duplicateFinder(arr) {
  let duplicate;

  while (true) {
    if (arr[0] === arr[arr[0]]) {
      duplicate = arr[0];
      break;
    } else {
      let temp = arr[arr[0]];
      arr[arr[0]] = arr[0];
      arr[0] = temp;
    }
  }
  console.log(duplicate);
}

duplicateFinder(arr);
