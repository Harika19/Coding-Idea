// https://leetcode.com/problems/product-of-array-except-self/

var productExceptSelf = function (nums) {
    let prod = 1, c = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            c++
        } else {
            prod = prod * nums[i]
        }
    }
    if (c > 1) {
        for (let i = 0; i < nums.length; i++) {
            nums[i] = 0
        }
        return nums
    }
    for (let i = 0; i < nums.length; i++) {
        if (c == 1) {
            if (nums[i] == 0) {
                nums[i] = prod
            } else {
                nums[i] = 0
            }
        } else {
            nums[i] = prod / nums[i]
        }
    }
    return nums
}

console.log(productExceptSelf([1, 2, 3, 4])) //[24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])) //[0,0,9,0,0]