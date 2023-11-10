// https://leetcode.com/problems/reverse-pairs/
// nums[i] > 2 * nums[j]

// brute force 
var reversePairs1 = function (nums) {
    let c = 0
    for (let i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (i < j && nums[i] > 2 * nums[j]) {
                c++
            }
        }
    }
    return c
};

// optimised - hint : merge sort


var mergesort = function (low, mid, high, nums) {
    let left = low
    let right = mid + 1
    let temp = []
    while (left <= mid && right <= high) {
        if (nums[left] <= nums[right]) {
            temp.push(nums[left])
            left++
        } else {
            temp.push(nums[right])
            right++
        }
    }

    while (left <= mid) {
        temp.push(nums[left])
        left++
    }
    while (right <= high) {
        temp.push(nums[right])
        right++
    }
    for (let i = 0; i < temp.length; i++) {
        nums[i + low] = temp[i]
    }

    return nums
}

var countNo = function (nums, low, mid, high) {
    let c=0
    let right = mid+1
    console.log('dddddd', right, nums, c)
    for(let i=low;i<=mid;i++){ 
        
        while (right <= high && nums[i] > 2 * nums[right]) right++;
        c+= right-(mid+1)
        console.log('hehehhe', right, nums, c)
    }
    return c

};

var merge = function (nums, low, high) {
    let c = 0;
    if (low < high) {
        let mid = Math.floor((low + high) / 2);
        c += merge(nums, low, mid);
        c += merge(nums, mid + 1, high);
        c += countNo(nums, low, mid, high);
        mergesort(low, mid, high, nums);
    }
    return c;
};

var reversePairs = function (nums) {
    return merge(nums, 0, nums.length - 1);
}


console.log(reversePairs([2, 4, 3, 5, 1]))