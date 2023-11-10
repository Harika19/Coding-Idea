// https://leetcode.com/problems/climbing-stairs/
// recursion - Time Limit Exceeded for big no

var climbStairs1 = function(n) {
    if(n==0) return 1
    if(n==1) return 1
    return climbStairs1(n-1) + climbStairs1(n-2) // overlapping sub-problems 
};

// Tabulation approach. - bottom up approach - from base condition to required

// Time Complexity: O(N), Space Complexity: O(N)

// recurence to DP -> MEMORIZATION ( take n+1 size dp array)
var climbStairs2 = function(n) {
    let arr =Array(n+1).fill(-1) //
    arr[0]=1
    arr[1]=1
    for(let i=2; i<=n;i++){
        arr[i] = arr[i-1]+arr[i-2]
    }

    return arr[n]
};
console.log(climbStairs2(3))

//  Space Optimization

var climbStairs = function(n) {
    let curri
    let prev =1
    let prev2 =1
    for(let i=2; i<=n;i++){
        curri = prev + prev2
        prev2 = prev
        prev = curri
    }

    return prev
};
console.log(climbStairs(3))

