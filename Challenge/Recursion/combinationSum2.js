// for large array of ele it is failing...

var recursionTech = function(index, arr,newArr, res,target){
    if(index == arr.length){
        if(target==0){
            res.push([...newArr])
        }
        return
    }

    if(arr[index]<= target){
        newArr.push(arr[index])
        recursionTech(index+ 1, arr, newArr, res, target-arr[index])
        newArr.pop();
    }
    recursionTech(index+1, arr, newArr, res, target)
}

var combinationSum2 = function(candidates, target) {
    let res =[]
    candidates.sort()
    recursionTech(0,candidates,[], res,target)

    return [...new Set(res.map(JSON.stringify))].map(JSON.parse);
};

//console.log(combinationSum2([10,1,2,7,6,1,5],8))

// correct approach
// TC -( 2 POWER N) * K

var recursionTech1 = function(index, arr,newArr, res,target){
    if (target == 0) {
        res.push([...newArr]);
        return;
    }

    for(let i=index;i<arr.length;i++) {
        // if(i> index && arr[i] == arr[i-1]) continue;
        if(arr[i]> target) break;

        newArr.push(arr[i])
        recursionTech1(i+ 1, arr, newArr, res, target-arr[i])
        newArr.pop();
    }
}

var combinationSum = function(candidates, target) {
    let res =[]
    candidates.sort((a, b) => a - b);
    recursionTech1(0,candidates,[], res,target)

    return res;
};

console.log(combinationSum([10,1,2,7,6,1,5],8))

// find all unique combinations in candidates where the candidate numbers sum to target.
// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: 
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]