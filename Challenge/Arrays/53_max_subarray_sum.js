// https://leetcode.com/problems/maximum-subarray/

var maxSubArray = function(nums) {
    let sum=0, maxi=nums[0]
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
        maxi = Math.max(maxi, sum)
        if(sum<0){
            sum=0
        }
    }
    return maxi
};


// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))


var maxSubArrayPrint = function(nums) {
    let sum =0,maxi = nums[0]
    let start, end;
    for(let i=0;i<nums.length;i++){
        if(sum==0){
            start =i
        }
        sum+=nums[i];
        if(sum>maxi){
            maxi = sum;
            end =i
        }
        if(sum<0){
            sum=0
        }
    }
let res=[]
    for(let i=start;i<=end;i++){
        res.push(nums[i])
    }
    return res
};


console.log(maxSubArrayPrint([-2,1,-3,4,-1,2,1,-5,4])) //[4,-1,2,1]