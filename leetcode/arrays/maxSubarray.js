/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let globalMaximum = nums[0];
            let localMax = nums[0]

    for(let i = 1; i< nums.length;i++){
        let newVal = nums[i] + localMax
        if(nums[i] > newVal){
            localMax = nums[i]
        }
        else{
            localMax = newVal;
        }
        if(localMax > globalMaximum){
           globalMaximum = localMax;
        }
       
    }
    return globalMaximum
};

maxSubArray([-2,1,-3,4,-1,2,1,-5,4])