function permutations(index, arr, ans) {
  if (index === arr.length) {
    ans.push([...arr]);
    return;
  } else {
    for (let i = index; i < arr.length; i++) {
      //swap elements at index and i
      let temp = arr[index];
      arr[index] = arr[i];
      arr[i] = temp;

      //passing the swapped array to permutations function
      permutations(index + 1, arr, ans);

      //swap the elements again before exiting the function
      temp = arr[index];
      arr[index] = arr[i];
      arr[i] = temp;
    }
  }
}

function main(arr) {
  let index = 0;
  let ans = [];
  permutations(index, arr, ans);
  return ans;
}

console.log(main([1, 2, 3, 4]));

// SC => O(n) -> used to store the implicit stack created during recursion.
// -> It doesn't use any extra data structure

// TC => O(n*n!) -> The recursion tree has n! children and each node takes O(n) time complexity
