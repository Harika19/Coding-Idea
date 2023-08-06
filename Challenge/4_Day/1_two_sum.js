// https://leetcode.com/problems/two-sum/

// map approach 

var twoSum1 = function(nums, target) {
   let map = new Map()
   for(let i =0;i<nums.length;i++){
    let first = nums[i]
    let sec = target-first
    if(map.has(sec)){
        return [map.get(sec), i]
    }else{
        map.set(first, i)
    }
   }
};

// console.log(twoSum1([2,4,1,5], 7))


// two -pointer - sorted arrays

var twoSum = function(nums, target) {
    let i=0, j=nums.length-1
    nums.sort((a,b)=> a-b)
    console.log('nn', nums)
    for(let k=0;k<nums.length;k++){
        let sum = nums[i]+nums[j]
        if(sum == target){
            return [i,j]
        }else if(sum<target){
            i++
        }else{
            j--
        }
    }

    return -1
 };
 
 console.log(twoSum([1,2,5,8], 7))


 // other approach can be using binary search for finding element( tar-first)