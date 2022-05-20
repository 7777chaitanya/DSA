/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let maxSum = nums[0];
    for(let i = 0;i<nums.length;i++){
        let sum = 0;
        let j = i
        while(j < nums.length){
            sum += nums[j]
            if(sum > maxSum){
                maxSum = sum
            }
            j++
        }
    }
    return maxSum;
};