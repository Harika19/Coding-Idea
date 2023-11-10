// https://leetcode.com/problems/house-robber/

// Maximum Sum of Non-Adjacent Elements | House Robber | 1-D | DP on Subsequences

// memorization - taking new dp array 

var logic = function(nums, index, dp) {
    if(index<0) return 0
    if(dp[index] !== -1) return dp[index]
    if(index==0) return  nums[index]

    let pick = nums[index] + logic(nums, index-2, dp)
    let notPick = 0 + logic(nums, index-1, dp)
    return dp[index] = Math.max(pick, notPick)
}

var rob = function(nums) {
    let dp = new Array(nums.length).fill(-1)
    return logic(nums, nums.length-1, dp)    
};

console.log(rob([1,2,3,1]))

// console.log(rob([1,2,1,0]))

// tabulation 


var logic = function (nums, dp) {  
    dp[0] = nums[0]
    let notPick, pick;
    for (let i = 1; i < nums.length; i++) {
        pick = nums[i]
        if (i > 1) pick += dp[i - 2]
        notPick = 0 + dp[i - 1]
        dp[i] = Math.max(pick, notPick)
    }
    return dp[nums.length-1]
}

var rob = function (nums) {
    let dp = new Array(nums.length).fill(-1)
    return logic(nums, dp)
};


// tabulation with space optimization


var rob = function(nums) {
    let prev = nums[0]
    let prev2 =0
    let curr;
    for(let i=1;i<nums.length;i++){
        let pick = nums[i]
        if(i>1) pick+=prev2
     let notPick = 0 + prev
     curr = Math.max(pick, notPick)
     prev2 = prev
     prev = curr 
    }
     return prev
 };

 




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

// console.log(rob1([1,2,3])) // 3

// console.log(rob1([1])) // 1
