
// Recursion on Subsequences | Printing Subsequences

var Subsequences = function (index, arr, newarr, sum, k) {
    if (index == arr.length) {
        if(k == sum){
            console.log('arr:', newarr)
        }
        return;
    }
    newarr.push(arr[index])
    sum+=arr[index]
    Subsequences(index + 1, arr, newarr,sum, k)
    newarr.pop(arr[index])
    sum-=arr[index]
    Subsequences(index + 1, arr, newarr,sum, k)
}

var main = function (arr, k) {
    Subsequences(0, arr, [], 0, k)
    return;
}

console.log(main([3, 1, 2, 4, 5, 2 ],5))