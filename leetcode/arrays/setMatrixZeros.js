/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function (matrix) {
    const columns = matrix[0].length
    const rows = matrix.length
    const rowMemory = []
    const colMemory = []
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (matrix[i][j] === 0) {
                rowMemory.push(i);
                colMemory.push(j);
            }
        }
    }
    
    //setting the rows to zero
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < colMemory.length; j++) {
            matrix[i][colMemory[j]] = 0
        }
    }
    
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rowMemory.length; j++) {
            matrix[rowMemory[j]][i] = 0
        }
    }
}