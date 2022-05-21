var maxSubArray = function(nums) {
    let globalMaximum = nums[0];
    
    for(let i = 1; i< nums.length;i++){
        let newVal = globalMaximum + nums[i]
        if(nums[i] > newVal){
            globalMaximum = nums[i]
        }
        else{
            globalMaximum += nums[i]
        }
        console.log(globalMaximum)
    }
    return globalMaximum
};

maxSubArray([-2,1,-3,4,-1,2,1,-5,4])