/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// sort an array of 0s, 1s & 2s in the striver DSA sheet

 var sortColors = function(nums) {
    while(true){
    let flag = 0;
    for(let i =0;i<nums.length-1;i++ ){
        if(nums[i]>nums[i+1]){
            let temp = nums[i];
            nums[i] = nums[i+1];
            nums[i+1]  = temp;
            flag = 1
        }
    }
        if(flag === 0){
            break;
        }
    }
};