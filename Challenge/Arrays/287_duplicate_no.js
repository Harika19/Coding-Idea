// https://leetcode.com/problems/find-the-duplicate-number/

// floyd warshall alg , detect cycle and then intersect point

// tc -o(n), sc -o(1)

var findDuplicate = function (nums) {
    let slow = nums[0]
    let fast = nums[nums[0]]

    while (slow != fast) {
        slow = nums[slow]
        fast = nums[nums[fast]]
    }

    slow = 0
    while (slow != fast) {
        slow = nums[slow]
        fast = nums[fast]
    }

    return slow
};

console.log(findDuplicate([1, 2, 4, 3, 2]))