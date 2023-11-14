// https://leetcode.com/problems/longest-consecutive-sequence/description/


var longestConsecutive = function(nums) {
    if(nums.length==0) return 0
    let set = new Set()
    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i])
    }
    let maxi = 1

    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i] - 1)) { // picks only starting elements - 1,100,200
            let c = 1
            while (set.has(nums[i] + 1)) {
                c += 1
                nums[i] += 1

            }
            maxi = Math.max(maxi, c)
        }
    }
    return maxi
};


// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.