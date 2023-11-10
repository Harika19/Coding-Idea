// https://leetcode.com/problems/single-element-in-a-sorted-array/

// Time Complexity: O(logN)

var singleNonDuplicate = function(nums) {
    if(nums.length==1) return nums
    if(nums[0]!==nums[1]) return nums[0]
    if(nums[nums.length-1]!==nums[nums.length-2]) return nums[nums.length-1]

    let low =1, high = nums.length-2
    while(low<=high){
        let mid = Math.floor((low+high)/2)

        if(nums[mid]!==nums[mid+1] && nums[mid]!==nums[mid-1]){
            return nums[mid]
        }

        if(mid%2==0 && nums[mid]===nums[mid+1] || mid%2!==0 && nums[mid]===nums[mid-1]){
            low = mid+1
        }else{
            high = mid -1
        }
    }
    return -1
};

let arr = [1, 1, 2, 3, 3, 4, 5, 5, 8, 8];
let ans = singleNonDuplicate(arr);
console.log("The single element is:", ans);
