
// Recursion on Subsequences | Printing Subsequences

var Subsequences = function (index, arr, newarr, res, sum, k) {
    if (index == arr.length) {
        if(k == sum){
            res.push([...newarr]);
        }
        return;
    }
    
    newarr.push(arr[index])
    sum+=arr[index]
    Subsequences(index + 1, arr, newarr,res, sum, k)
    newarr.pop(arr[index])
    sum-=arr[index]
    Subsequences(index + 1, arr, newarr,res, sum, k)
}

var main = function (arr, k) {
    let res =[]
   Subsequences(0, arr, [],res, 0, k)
    return res;
}

console.log(main([1,2,1 ],2))