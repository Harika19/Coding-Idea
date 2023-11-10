// https://www.interviewbit.com/problems/repeat-and-missing-number-array/

var number = function(nums){
    let n = nums.length
/*
 sum of given - sum of n natural numbers(nums.length)
 3+1+2+5+3 - 1+2+3+4+5
 cancel all - remaining -> 3 - 2 => 3 is duplicate, 4 is missing
 like wise get one eqn like => (sum of squares of given array nums - sum of squares of n natural numbers(nums.length))
 accordingly eqaute and find x and y val
 */

 const sn = (n*(n+1))/2
 const s2n = (n*(n+1)*(2*n+1))/6
 let s1=0,s2=0
 for(let i=0;i<n;i++){
    s1 += nums[i]
    s2 += nums[i]*nums[i]
 }
 const val1 = (s1-sn)
 let val2 = (s2-s2n)
 val2 = val2/val1

 let x = (val1+val2)/2
 let y = x-val1
 return[ x, y]

}

console.log(number([3,1,2,5,3]))
