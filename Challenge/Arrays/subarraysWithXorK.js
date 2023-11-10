// https://www.interviewbit.com/problems/subarray-with-given-xor/

/* 
optimised -> tc and sc - O(N)
x * k = xor 
k^ (x^k)= xor ^ k
x = xor ^ k

so find : 
1. find xor 
2. find x
3. increment count if x is in map
4. set xor to map
*/


var subarraysWithXorK = function(A, B) {
    let map = new Map()
    let xor = 0
    map.set(xor, 1)
    let c=0
    for(let i=0;i<A.length;i++){
        xor = xor ^ A[i]
        let x= xor ^ B
        c += (map.get(x)||0)
        map.set(xor, (map.get(xor)||0)+1)
    }
    return c
  }
  
  
  console.log(subarraysWithXorK([4, 2, 2, 6, 4], 6)) //4