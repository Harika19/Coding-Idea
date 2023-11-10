// https://leetcode.com/problems/majority-element/

// > n/2times 
// using map but sc - o(n)
var majorityElement1 = function(nums) {
    let n = Math.floor(nums.length/2)
    let map = new Map()
    for(let i=0;i<nums.length;i++){
        if(!map.get(nums[i])){
            map.set(nums[i], 1)
        }else{
            map.set(nums[i], map.get(nums[i])+1)
        }
        if(map.get(nums[i])>n){
            return nums[i]
        }
    }
};

// optimised. TC - O(N), SC(1)
// moores voting algo

var majorityElement = function(nums) {
    let c=0
    let ele
    for(let i=0;i<nums.length;i++){
        if(c==0){
            c=1
            ele = nums[i]
        }else if(ele == nums[i]){
            c++
        }else{
            c--
        }
    }
    let c2=0
    let l = Math.floor(nums.length/2)
    for(let i=0;i<nums.length;i++){
        if(nums[i]==ele){
            c2++
        }
    }
    if(c2>l){
        return ele
    }else{
        return -1
    }
};

console.log(majorityElement([2,2,1,1,1,2,2]))
console.log(majorityElement([3,3,4]))