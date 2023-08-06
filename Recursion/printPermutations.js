// TC - N * (N!)

var recursionTech = function (ans, nums, newArr, res) {

    if (newArr.length == nums.length) {
        ans.push([...newArr])
        return
    }

    for (let i = 0; i < nums.length; i++) {
        if (!res.get(nums[i])) {
            res.set(nums[i], true)
            newArr.push(nums[i])
            recursionTech(ans, nums, newArr, res)
            newArr.pop()
            res.set(nums[i], false)
        }
    }

}

var printPermutation = function (nums) {
    let res = new Map()
    let ans = []
    recursionTech(ans, nums, [], res)
    return ans
};

console.log(printPermutation([1, 2, 3]))





/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*var permute = function(nums) {
    const res = [];
    recursionFunction(nums, 0, res)
    return res;
};

function swap(nums, a,b){
    let t=nums[a];
    nums[a]=nums[b];
    nums[b] = t;
}

function recursionFunction(nums, ind, res){
    if(ind == nums.length){
        res.push([...nums])
    }
    
    for(let i= ind ; i<nums.length; i++){
        swap(nums, i, ind)
        recursionFunction(nums, ind+1, res)
        swap(nums, i,ind)
    }
}
*/