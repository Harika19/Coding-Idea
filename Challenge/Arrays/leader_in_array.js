// https://takeuforward.org/data-structure/leaders-in-an-array/

// Brute force

var leader1 = function(arr){
    let ans =[]
   for(let i=0;i<arr.length;i++){
    let req = true
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]<arr[j]){
            req = false
            break
        }
    }
    if(req){
        console.log('ans', ans)
        ans.push(arr[i])
    }
   }
   return ans
}
// console.log(leader1([4, 7, 1, 0]))


// optimised

var leader = function(arr){
    let maxi = arr[arr.length-1]
    let res=[]
    res.push(arr[arr.length-1]);
    for(let i=arr.length-2;i>=0;i--){
        console.log('iii', i, arr[i])
        if(arr[i]>maxi) {
            res.push(arr[i]);
            maxi= arr[i];
        }
    }
    return res;
}
console.log(leader([11,4, 7, 1, 0])) // [ 0, 1, 7, 11 ]

