// https://www.geeksforgeeks.org/number-subarrays-product-less-k/


// brute force approcah
var product = function(arr, k){
    let c=0
    for(let i=0;i<arr.length;i++){
        let prod =1
        for(let j=i;j<arr.length;j++){
            prod *= arr[j]
            if(prod<k){
                c+=1
            }else{
                break
            }
        }
    }
    return c
}

// console.log(product([1, 2,3,4] , 10 ))
// console.log(product([1, 9, 2, 8, 6, 4, 3] , 100 ))

// optimised 

var countSubarraysWithProductLessThanOrEqualToK = function(arr, k){
    let res=0, start=0;
    let prod =1
    for(let i=0;i<arr.length;i++){
        prod *= arr[i]
        console.log('1111', prod)
        while(start<=i && prod>k){
            prod = prod/arr[start]
            start++
            console.log('2222', prod, start)
        }
        console.log('3333', prod)
        const len = i - start + 1;
        res +=len
    }
    
    return res
}

//console.log(countSubarraysWithProductLessThanOrEqualToK([1, 2,3,4] , 10 ))

//console.log(countSubarraysWithProductLessThanOrEqualToK([24, 25, 26, 27] , 100 ))


var substringCalculator = function(s){
    // let c=0
    // for(let i=0;i<s.length;i++){
    //     let temp =''
    //     let set = new Set()
    //     temp+=s[i]
    //     if(!set.has(s[i])){
    //         set.add(s[i])
    //         c+=1
    //     }

    // }
    // return c
}

console.log(substringCalculator('abcde' )) // 15

