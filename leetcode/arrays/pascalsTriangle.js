/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function (numRows) {
    const resultMatrix = [];
    if (numRows >= 1) {
      resultMatrix.push([1]);
    }
    if (numRows >= 2) {
      resultMatrix.push([1, 1]);
    }
    for (let i = 2; i < numRows; i++) {
      const subArray = [];
      subArray[0] = 1;
      subArray[i] = 1;
  
      for (let j = 1; j < i; j++) {
        subArray[j] = resultMatrix[i - 1][j] + resultMatrix[i - 1][j - 1];
      }
      resultMatrix.push(subArray);
    }
    return resultMatrix;
  };
  