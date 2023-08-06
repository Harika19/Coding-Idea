// https://leetcode.com/problems/house-robber/

// Maximum Sum of Non-Adjacent Elements | House Robber | 1-D | DP on Subsequences

// memorization - taking new dp array 

var recursionTech = function(nums, index, dp) {
    if (index < 0) return 0;

  if (dp[index] !== -1) return dp[index];
  
  if (nums[index] == 0) return 0;
  if (nums[index] < 0) return Number.NEGATIVE_INFINITY;
    
    let pick = nums[index] + recursionTech(nums, index-2, dp)
    let notpick = 0 + recursionTech(nums, index-1, dp) 
    
    return dp[index] = Math.max(pick, notpick)
};

var rob = function(nums) {
    let dp = Array(nums.length).fill(-1)
    return recursionTech(nums, nums.length-1, dp)
};

console.log(rob([1,2,3,1]))


// tabulation with space optimization
// https://leetcode.com/problems/house-robber-ii/description/

var recursionTech1 = function(nums) {
    let prev = nums[0]
    let prev2= 0

    for(let i=1;i<nums.length;i++){
        let pick = nums[i]
        if(i>1){
            pick += prev2
        } 
        let notpick = prev + 0
        let curi = Math.max(pick, notpick)
        prev2 = prev
        prev = curi
    }
    return prev
};

var rob1 = function(nums) {
    if(nums.length==1) return nums
    const [, ...rest] = nums;
    let ans1 = recursionTech1(rest)
    nums.pop()
    let ans2 = recursionTech1(nums)
    return Math.max(ans1, ans2)
};

console.log(rob1([1,2,3])) // 3

console.log(rob1([1])) // 1
