// algo

// * the input has to be sorted to apply binary search

// * we reduce the input to half of the size everytime thus drastically minimising the time complexity

const binarySearch = (arr, elementToFind) => {
  let start = 0;
  const length = arr.length;
  let end = length;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === elementToFind) {
      return mid;
    } else if (arr[mid] < elementToFind) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(binarySearch(arr, 9));

// time complexity => O(log n)
