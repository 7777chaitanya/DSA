/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

 function myPow1(x, n) {
    let localN = Math.abs(n);
  
    if (localN === 0) {
      return 1;
    } else if (localN % 2 === 0) {
      let y = myPow1(x, localN / 2);
  
      return y * y;
    } else {
      return x * myPow1(x, localN - 1);
    }
  }
  var myPow = function (x, n) {
    let result = myPow1(x, n);
  
    if (n > 0) {
      return result;
    }
    return 1 / result;
  };

// TIME COMPLEXITY -> O(log n)

// Because the input size is halved everytime
// Since we are calling a the same fucntion twice during every recursion, 
// we are storing the function result in a variable thus avoiding calculating the value twice

// SPACE COMPLEXITY -> O(log n)
// This is the max depth of the recursion tree
  