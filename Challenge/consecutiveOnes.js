// https://takeuforward.org/data-structure/count-maximum-consecutive-ones-in-the-array/
/**
 * Count Maximum Consecutive One’s in the array
 * Problem Statement: Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array.
 */


var consecutiveOnes = function(nums) {
    let c=0, maxRes=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==1){
            c++;
            maxRes = Math.max(maxRes, c)
        }else{
            c=0
        }
    }
    return maxRes
};
console.log(consecutiveOnes([1, 1, 0, 1, 1, 1]))
console.log(consecutiveOnes([1, 0, 1, 1, 0, 1]))