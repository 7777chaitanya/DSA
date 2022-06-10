/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

 function binarySearchInThedesiredMatrix(
    matrix,
    desiredMatrixIndex,
    subMatrixLength,
    target
  ) {
    let start = 0;
    let end = subMatrixLength - 1;
    let mid;
    while (start <= end) {
      mid = Math.floor((start + end) / 2);
      if (target === matrix[desiredMatrixIndex][mid]) {
        return true;
      } else if (target > matrix[desiredMatrixIndex][mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  
  var searchMatrix = function (matrix, target) {
    let start = 0;
    let end = matrix.length - 1;
    let mid;
    let subMatrixLength = matrix[0].length;
    let desiredMatrixIndex = -1;
    while (start <= end) {
      mid = Math.floor((start + end) / 2);
      if (
        target >= matrix[mid][0] &&
        target <= matrix[mid][subMatrixLength - 1]
      ) {
        desiredMatrixIndex = mid;
        break;
      } else if (target > matrix[mid][subMatrixLength - 1]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    if (desiredMatrixIndex >= 0) {
      const result = binarySearchInThedesiredMatrix(
        matrix,
        desiredMatrixIndex,
        subMatrixLength,
        target
      );
      if (result === true) {
        return true;
      }
    }
    return false;
  };
  
  
  // Time complexity => O(log n)
  // because we are using Binary search for both parent array and the child array
  
  // Space complexity => O(1)
  // the space used by the program is constant across all sizes of input
  