// https://leetcode.com/problems/find-the-duplicate-number/

var findDuplicate = function(nums) {
    let slow = nums[0];
    let fast = nums[nums[0]];
    console.log('11111', slow, fast)
    
    while (slow != fast) { // we are guaranteed to have a cycle
        slow = nums[slow];
        fast = nums[nums[fast]];
        console.log('2222', slow, fast)
    }
    
    slow = 0;
    
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    
    return slow;
};


console.log(findDuplicate([1,3,4,2,2]))