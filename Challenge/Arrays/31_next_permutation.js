// https://leetcode.com/problems/next-permutation/

// brute force - generate all perms - then sort it - return next element of given element.


// below is code to print all permutations

var perm = function (nums, map, stack, ans) {
    if (stack.length == nums.length) {
        ans.push([... stack])
        return
    }
    for (let i = 0; i < nums.length; i++) {
        if (!map.get(nums[i])) {
            map.set(nums[i], true)
            stack.push(nums[i])
            perm(nums, map, stack, ans)
            map.set(nums[i], false)
            stack.pop(nums[i])
        }
    }
}


var permutation = function (nums) {
    let map = new Map()
    let ans = [], stack = []
    perm(nums, map, stack, ans)
    return ans
}


//console.log(permutation([1, 2, 3]))

// optimised - tc - O(3N), sc - o(1)

var reverse = function (nums, start, end) {
    let temp
    while(start<=end){
        temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
        start++
        end--
    }
};


var nextPermutation = function(nums){
    let index=-1;
    let n = nums.length
    // finding breakpoint - point where sudden decrease 
    for(let i=n-2;i>=0;i--){
        console.log(nums[i], nums[i+1])
        if(nums[i]<nums[i+1]){
            index = i
            break
        }
    }

    // reverse array i.e [1,2,3] -> next perm [3,2,1]

    if(index == -1){
        return nums.reverse()
    }
    // swap ele -> check elemens from index till last , swap with ele geaer than index ele
    for(let i=n-1;i>=index;i--){
        console.log('2222', nums[i], nums[i+1])
        if(nums[i]>nums[index]){
            [nums[i],nums[index]] = [nums[index], nums[i]]
            break
        }
    }
    
    // reverse remaining part of array after break poiny so that it will be in ascending order 
    reverse(nums, index+1, nums.length-1)

    return nums
}


console.log(nextPermutation([1, 2, 3]))
//console.log(nextPermutation([ 3,2,1]))
// console.log(nextPermutation([1,3,2]))