// https://leetcode.com/problems/longest-increasing-subsequence/description/
//Time Complexity: O(N*N)

// pick , not pick logic, need to have 2 var - prev and curr to keep track and to check if its increasing or not.
var Subsequence = function(nums, ind, prev, dp) {
    
    if(ind==nums.length) return 0;
    if (dp[ind][prev + 1] !== -1) return dp[ind][prev + 1];

    let notPick = 0 + Subsequence(nums, ind+1, prev, dp);
    // pick
    let pick = 0;
    if(prev ==-1 || nums[prev]< nums[ind]){ // prev ==-1 => for first element
        pick = 1 + Subsequence(nums, ind+1, ind, dp);
    }
    dp[ind][prev + 1] = Math.max(notPick, pick)
    console.log('q11111', ind, prev+1,  dp[ind][prev + 1])
    return dp[ind][prev + 1]
};

var lengthOfLIS = function(nums) {
    let dp = new Array(nums.length).fill().map(() => new Array(nums.length).fill(-1));
    
    return Subsequence(nums, 0, -1, dp);
};
console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.