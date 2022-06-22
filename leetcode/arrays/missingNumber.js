var missingNumber = function(nums) {
    const numsLength = nums.length;
    const expectedSum = numsLength*(numsLength+1)/2;
    let actualSum = nums.reduce((sum, acc)=>sum+acc, 0)
    return expectedSum - actualSum
};