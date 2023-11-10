//https://leetcode.com/problems/permutation-sequence/


// TC - O(N) * O(N) = O(N^2)
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    let arr =[], res=''
    let fact =1
    for (let i=1;i<n;i++){
        fact *= i
        arr.push(i)
    }
    arr.push(n)
    k-=1
    while(true){
        res+= arr[(Math.floor((k)/fact))]
        arr.splice(Math.floor((k)/fact), 1)
        if(arr.length == 0) break
        k%=fact
        fact /= arr.length
    }
    return res
};

console.log(getPermutation(17, 4)) // 3412 - return 17 permuation formed by [1,2,3,4]- as n =4