
// Recursion on Subsequences | Printing Subsequences

// TC - 2 POWER N

// for finding count of pairs - return 1 or 0 based on condition

var Subsequences = function (index, arr, sum, k) {
    if (index == arr.length) {
        if(k == sum){
            return 1
        }else{
            return 0
        }
    }
    sum+=arr[index]
    let l = Subsequences(index + 1, arr,sum, k)
    sum-=arr[index]
    let r = Subsequences(index + 1, arr,sum, k)
    return l+r
}

var main = function (arr, k) {
    return Subsequences(0, arr, 0, k);
}

console.log(main([3, 1, 2, 4, 5 ],5))