// reverse array of numbers using recursion 


// approach 1

var swap = function(arr, a, b){
    let t;
    t=arr[a];
    arr[a]=arr[b];
    arr[b]=t;
}

var revFun = function(arr,l, r){
    if(l>=r){
        return;
    }
    swap(arr,l,r)
    revFun(arr, l+1, r-1)
}

var main = function(arr){
    revFun(arr,0,arr.length-1)
    return arr
}

console.log(main([1,2,3,4,5]))


// approach 2

// for swap -> (i, n-i-1)


var swap2 = function(arr, a, b){
    let t;
    t=arr[a];
    arr[a]=arr[b];
    arr[b]=t;
}

var revFun2 = function(arr,i, n){
    if(i>=n/2){
        return;
    }
    swap2(arr,i,n-i-1)
    revFun2(arr, i+1, n)
}

var main2 = function(arr){
    revFun2(arr,0,arr.length)
    return arr
}

console.log(main2([1,2,3,4,5]))