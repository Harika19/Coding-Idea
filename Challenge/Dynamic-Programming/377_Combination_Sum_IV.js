// https://leetcode.com/problems/combination-sum-iv/description/
// NEETCODE

// T = Target, N = nums.length
// Time complexity: O(T⋅N)
// Space complexity: O(T) + Recursive Stack

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var combinationSum4 = function (nums, target) {
    let map = new Map()
    map[0] =1
    for(let total=1;total<=target; total++){
        map[total] =0
        for(let ele of nums){
            console.log('total', total, 'ele', ele)
            map[total] += (map[total-ele]||0);
            console.log('map', map)
        }
        console.log(map)
    }
    return map[target]
};


// Input: nums = [1,2,3], target = 4
// Output: 7
// Explanation:
// The possible combination ways are:
// (1, 1, 1, 1)
// (1, 1, 2)
// (1, 2, 1)
// (1, 3)
// (2, 1, 1)
// (2, 2)
// (3, 1)
// Note that different sequences are counted as different combinations.

console.log(combinationSum4([1,2,3], 4))