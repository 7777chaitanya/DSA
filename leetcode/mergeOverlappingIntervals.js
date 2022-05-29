/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function (intervals) {
    //sort the intervals array with based on the first element in each sub-array
    intervals.sort((x, y) => {
      return x[0] - y[0];
    });
  
    let resultArray = [];
    resultArray.push(intervals[0]);
    latestResultArrayIndex = 0;
    if (intervals.length === 1) {
      return resultArray;
    }
  
    for (let i = 1; i < intervals.length; i++) {
      //skip if both elements are lower
      if (
        intervals[i][0] >= resultArray[latestResultArrayIndex][0] &&
        intervals[i][1] <= resultArray[latestResultArrayIndex][1]
      ) {
        continue;
      }
      //merge if the first element is smaller than RA's second element
      else if (intervals[i][0] <= resultArray[latestResultArrayIndex][1]) {
        resultArray[latestResultArrayIndex][1] = intervals[i][1];
      }
      //if both the first element is greater than second element of RA's second index, then push the current element to RA and increment latestResultArrayIndex
      else if (intervals[i][0] > resultArray[latestResultArrayIndex][1]) {
        resultArray.push(intervals[i]);
        latestResultArrayIndex++;
      }
    }
  
    return resultArray;
  };
  