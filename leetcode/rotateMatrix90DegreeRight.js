/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// This is a working solution for all square matrices

 var rotate = function (matrix) {
    let l = matrix[0].length - 1;
    let i = 0;
    while (i < Math.floor(matrix[0].length/2)) {
      let outerWhileI = i;
      for (let j = i; j < l - i; j++) {
        let count = 0;
        let k = j;
        let temp;
        let temp2 = matrix[i][j];
        while (count < 4) {
          if (count % 2 === 0) {
            temp = matrix[k][l - i];
            matrix[k][l - i] = temp2;
          } else {
            temp2 = matrix[k][l - i];
            matrix[k][l - i] = temp;
          }
          let oldI = i;
          i = k;
          k = l - oldI;
          count++;
        }
      }
      i = outerWhileI + 1;
    }
};

