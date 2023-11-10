// all possible sums

var subsetSumsHelper = function (index, arr, sum, res) {
    if (index == arr.length) {
        res.push(sum)
        return res
    }
    
    sum+=arr[index]
    subsetSumsHelper(index + 1, arr,sum, res)
    sum-=arr[index]
    subsetSumsHelper(index + 1, arr,sum, res)
}

var main = function (arr) {
    let res = []
    subsetSumsHelper(0, arr, 0, res )
    return res.sort((a,b)=>a-b)
}

console.log(main([2,3])) // [ 0, 2, 3, 5 ] 
console.log(main([5,2,1])) // [0, 1, 2, 3,5, 6, 7, 8]
console.log((main([2 ,5, 8, 11, 13])))