// https://leetcode.com/problems/rearrange-array-elements-by-sign/

// TC - O(N), SC - O(N)

var rearrangeArray = function(nums) {
    let res = new Array(nums.length)
    let neg = 1, pos =0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]<0){
            res[neg]= nums[i]
            neg+=2
        }else{
            res[pos]= nums[i]
            pos+=2
        }
    }
    return res
};


console.log(rearrangeArray([3,1,-2,-5,2,-4])) // [3,-2,1,-5,2,-4]
