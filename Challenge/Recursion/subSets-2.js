// https://leetcode.com/problems/subsets-ii/submissions/

// tc - O(k * 2^n)., O(2^n) for generating every subset and O(k)  to insert every subset in another data structure

// no dupliate pairs, all possible subsets

var subsetsWithDup = function(nums) {
    nums.sort((a,b)=> a-b)
    let n= nums.length
    let res=[]
    function helperFunction(ind, nums, temp){
        res.push([...temp])
        for(let i=ind;i<n;i++){
            if(i!=ind && nums[i]==nums[i-1]) continue
            temp.push(nums[i])
            helperFunction(i+1,nums, temp)
            temp.pop()
        }
    }
    helperFunction(0,nums, [])
    return res
};

console.log(subsetsWithDup([1, 2,2])) //[ [], [ 1 ], [ 1, 2 ], [ 1, 2, 2 ], [ 2 ], [ 2, 2 ] ]