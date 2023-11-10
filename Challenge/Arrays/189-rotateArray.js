// https://leetcode.com/problems/rotate-array/

var rotate0 = function (nums, k) {
    let q = nums.length - k
    let t = []
    for (let i = k + 1; i < nums.length; i++) {
        t.push(nums[i])
    }
    for (let i = 0; i < q; i++) {
        t.push(nums[i])
    }
    return t
};

//console.log(rotate0([1,2,3,4,5,6,7], 3))

var rotate1 = function (nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
    return nums
};

//console.log(rotate1([1, 2, 3, 4, 5, 6, 7], 3))

//Day-2
// optimised, store rotating part in temp ,shift accordingly and then add temp at end

var rotate2 = function (nums, t) {
    let k =t+1
    let temp =[]
    for (let i = 0; i < k; i++) {
       temp.push(nums[i])
    }
    
    for(let i=k;i<nums.length;i++){
        nums[i-k] = nums[i]
    }
    // let index =0
    for(let i =(nums.length-k);i<nums.length;i++){
        nums[i]=temp[i-(nums.length-k)]
        // index++
    }
    return nums
};

// console.log(rotate2([1, 2, 3, 4, 5, 6, 7], 3))
// console.log(rotate2([-1,-100,3,99], 2))


// reverse 

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

var rotate = function (nums, t) {
    if(nums.length==0) return
    if(nums.length==1) return nums
    t=t%(nums.length)
    console.log(t)
    
    let temp = nums.length-t
    reverse(nums, 0, temp-1)
    reverse(nums, temp, nums.length-1)
    reverse(nums, 0, nums.length-1)
    return nums
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)) // [095, 6, 7, 1,2, 3, 4]
console.log(rotate([-1,-100,3,99], 2))
console.log(rotate([-1], 2))
