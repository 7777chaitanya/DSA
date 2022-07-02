/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 function threeSum(nums) {
    let op = []
    for(let i = 0;i<nums.length-2;i++){
        for(let j = i+1;j<nums.length-1;j++){
            for(let k = j+1;k<nums.length;k++){
                let iAndJ = nums[i]+nums[j]
                if(iAndJ+nums[k] === 0){
                    op.push([nums[i], nums[j], nums[k]])
                   }
               }
           }
       }
    console.log(op)
   return op;
};

threeSum([-1,0,1,2,-1,-4])