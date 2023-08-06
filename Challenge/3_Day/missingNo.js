// https://leetcode.com/problems/missing-number/


// 1. brute force - check from 1,2,3..toExponential


// 3. sum 

var missingNumber = function(nums) {
    const n = nums.length;
    let expectedSum = (n * (n + 1)) / 2;
    for (let i = 0; i < nums.length; i++) {
        expectedSum -= nums[i]
    }
    
    return expectedSum
};

//console.log(missingNumber([3,0,1]))

// 2. hash - put in hash -> hash[arr[i]]= 1, then traverse and see where is 0

var missingNumber1 = function(nums) {
    let res = new Array(nums.length+1).fill(-1)
    for(let i of nums){
        res[i]= i
    }
    return res.indexOf(-1)
};

//console.log(missingNumber1([3,0,1]))


// xor - a^a=0 

var missingNumber2 = function(arr) {
    let res =0

    for(let i=0;i<arr.length;i++){
        res = res^i^arr[i]
    }
    return res^arr.length // trying to XOR from 0 to n elements - so in above for loop till n-1 are xored , here we xor n .
 };

 console.log(missingNumber2([0,2,1]))