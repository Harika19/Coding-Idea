// https://takeuforward.org/data-structure/dynamic-programming-frog-jump-dp-3/

// recursion

// var recursionTech1 = function(arr,index){
//     if(index == 0) return 0
//     let left = recursionTech1(arr, index-1) + Math.abs(arr[index]-arr[index-1])
//     let right = Number.MAX_SAFE_INTEGER;
//     if(index>1){
//          right = recursionTech1(arr, index-2) + Math.abs(arr[index]-arr[index-2])
//     }

//     return Math.min(left, right)
// }

// var frogStair = function(arr, n) {
//     return recursionTech1(arr, n-1)
// };

// console.log(frogStair([30,10,60,10,60,50],6))

// use memorization to convert from recurtion to DP ( store in DP array ) - top down approach

var recursionTech1 = function(arr,index, newArr){
    
    if(index == 0) return 0
    if(newArr[index] !== -1) return newArr[index]

    let left = recursionTech1(arr, index-1, newArr) + Math.abs(arr[index]-arr[index-1])
    let right = Number.MAX_SAFE_INTEGER;
    if(index>1){
         right = recursionTech1(arr, index-2, newArr) + Math.abs(arr[index]-arr[index-2])
    }

    newArr[index] = Math.min(left, right)
    return newArr[index]
}

var frogStair = function(arr, n) {
    let newArr = Array(n).fill(-1)
    newArr[0] =0
    return recursionTech1(arr, n-1, newArr)
};

console.log(frogStair([30,10,60,10,60,50],6))

// tabulation - bottom - up
// still SC - O(N)

var frogStair = function(arr, n) {
    let dp = Array(n).fill(0)
    dp[0] =0
    for(let i=1;i<n;i++){
        let fs = dp[i-1] + Math.abs(arr[i]-arr[i-1])
        let ss = Number.MAX_SAFE_INTEGER;
        if(i>1){
            ss = dp[i-2] + Math.abs(arr[i]-arr[i-2])
        }
        dp[i] = Math.min(fs, ss)
    }
    return dp[n-1]
};

console.log(frogStair([30,10,60,10,60,50],6))

// sc optimizaion

var frogStair = function(arr, n) {
    let curri
    let prev  =0
    let prev2  =0
    for(let i=1;i<n;i++){
        let fs = prev + Math.abs(arr[i]-arr[i-1])
        let ss = Number.MAX_SAFE_INTEGER;
        if(i>1){
            ss = prev2 + Math.abs(arr[i]-arr[i-2])
        }
        curri = Math.min(fs, ss)
        prev2 = prev
        prev = curri
        
    }
    return prev
};

console.log(frogStair([30,10,60,10,60,50],6))