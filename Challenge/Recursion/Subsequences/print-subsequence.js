
// Recursion on Subsequences | Printing Subsequences

var Subsequences = function (index, arr, newarr) {
    if (index == arr.length) {
        console.log('arr:', newarr)
        return;
    }
    newarr.push(arr[index])
    Subsequences(index + 1, arr, newarr)
    newarr.pop(arr[index])
    Subsequences(index + 1, arr, newarr)
}

var main = function (arr) {
    Subsequences(0, arr, [])
    return;
}

console.log(main([3, 1, 2]))
