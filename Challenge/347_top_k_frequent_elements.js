// https://leetcode.com/problems/top-k-frequent-elements/

var topKFrequent = function(nums, k) {
    let res=[]
    let map = new Map()
    for(let i=0;i<nums.length;i++){
        map.set(nums[i], (map.get(nums[i])|| 0)+1)
    }
    let temp= [...map].sort((a,b)=>b[1]-a[1]) // imp
    for(let i=0; i<k; i++){
        res.push(temp[i][0])
    }
    return res
};

console.log(topKFrequent([1,1,1,2,2,3], 2)) // [ 1, 2 ]
console.log(topKFrequent([1,2], 2)) // [1,2]