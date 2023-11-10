// 3 august 2023

// https://leetcode.com/problems/single-number/

// every element appears twice except for one. Find that single one.

// Brute force - 408 ms

var singleNumber1 = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let c = 0
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                c++
            }
        }
        if (c == 1) {
            return nums[i]
        }
    }
};

// console.log(singleNumber1([2,2,1,1,3]))

// better approach hashing - not working for - numbers and big numbers , so go with map as below

var singleNumber2 = function (nums) {
    let maxi = nums[0]
    for (let i = 0; i < nums.length; i++) {
        maxi = Math.max(maxi, nums[i])
    }
    console.log('max', maxi)
    let temp = new Array(maxi + 1).fill(0)
    for (let i = 0; i < nums.length; i++) {
        temp[nums[i]]++
        console.log('nums', nums[i], temp[nums[i]], temp)
    }
    for (let i = 0; i < temp.length; i++) {
        if (temp[nums[i]] === 1) {
            return nums[i]
        }
    }
    return -1;

};

// console.log(singleNumber2([-1,-1,-2]))



// better approach - Hashing using the map data structure - 58ms

var singleNumber3 = function (nums) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        map.set(nums[i], (map.get(num) || 0) + 1)
    }
    for (let [key, val] of map) {
        if (val === 1) {
            return key
        }
    }

};

// console.log(singleNumber3([-4, -1, -2, -1, -2]))


// optimised approach - xor - 62ms, but no space is required


var singleNumber = function (nums) {
    let ans =0
    for (let i = 0; i < nums.length; i++) {
        ans = ans^nums[i]
    }
    return ans
};

console.log(singleNumber([-4, -1, -2, -1, -2]))