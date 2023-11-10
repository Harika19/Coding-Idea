
// Recursion on Subsequences | Printing 1 st Subsequence with sum k

// for finding first pair - use return true and false method

var Subsequences = function (index, arr, newarr, sum, k) {
    if (index == arr.length) {
        if(k == sum){
            console.log('arr:', newarr)
            return true
        }else{
            return false;
        }
        
    }
    newarr.push(arr[index])
    sum+=arr[index]
    if(Subsequences(index + 1, arr, newarr,sum, k)== true) return true
    newarr.pop(arr[index])
    sum-=arr[index]
    if(Subsequences(index + 1, arr, newarr,sum, k)==true) return true
    return false
}

var main = function (arr, k) {
    return Subsequences(0, arr, [], 0, k)
}

console.log(main([3, 1, 2, 4, 5, 2 ],5))