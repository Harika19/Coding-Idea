// https://leetcode.com/problems/sort-colors/


// brute force - sort it using any sorting algo - TC - O(NLOGN)

// better approach - have count of 0,1,2 then rearranfe accordingly using count in same array - TC - O(2N), SC - O(1)

// Optimised - Dutch national flag algo - TC -  O(N),SC - O(1)

var sortColors = function(nums) {
    let low =0
    let mid =0
    let high = nums.length-1

    while(mid<=high){
        if(nums[mid] ==0){
            [nums[low], nums[mid]]= [nums[mid], nums[low]]
            low++
            mid++
            console.log('11111',nums)
        }else if(nums[mid] ==1){
            mid++
            console.log('222222',nums)
        } else {
            [nums[mid], nums[high]]= [nums[high], nums[mid]]
            high--
            console.log('33333',nums)
        }
    }
    return nums
};

console.log(sortColors([1,0,2,1,1,0]))