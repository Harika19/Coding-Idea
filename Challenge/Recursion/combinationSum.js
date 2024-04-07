// TC: (2 power k) * k

var recursionTech = function(index, arr,newArr, res,target){
    if(index == arr.length){
        if(target==0){
            res.push([...newArr])
        }
        return
    }

    if(arr[index]<= target){
        newArr.push(arr[index]);
        recursionTech(index, arr, newArr, res, target-arr[index]);
        newArr.pop();
    }
    recursionTech(index+1, arr, newArr, res, target)
}

var combinationSum = function(candidates, target) {
    let res =[]
    recursionTech(0,candidates,[], res,target)
    return res;
};

console.log(combinationSum([2,3,6,7], 7)) // [ [ 2, 2, 3 ], [ 7 ] ]