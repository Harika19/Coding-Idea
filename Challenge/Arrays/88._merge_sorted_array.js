// https://leetcode.com/problems/merge-sorted-array/


/*var merge = function (nums1, m, nums2, n) {
    let left = nums1.length - 1
    let right = 0

    if (nums1.length > nums2.length && nums1[left] == 0) {
        while (left > 0 && right < n) {
            if (nums1[left] < nums2[right]) {
                nums1[left] = nums2[right]
                nums2[right] = nums1[left]
                left--
                right++
            }
        }
        return nums1.sort()
    } else {
        return nums2
    }


};*/


// 1. brute force - take 3 new array and compare and push to this array
// 2. optimal -> 2 pointer -> last ele of 1 arr, 1 ele of 2 arr , compare and swap and increment , dec pointers atlast sort 2 arrays separately
// TC - O((M+N)LOG(M+N)), SC - O(1)

var merge = function(nums1, m, nums2, n) {
    let n2 =n
   for(let i=0;i<nums2.length;i++){
    nums1[m+i]= nums2[n2-1]
    n2--
   }
   return nums1.sort((a,b)=> a-b)
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)) // [1,2,2,3,5,6]
console.log(merge([0], 0, [1], 1))  // [1]
