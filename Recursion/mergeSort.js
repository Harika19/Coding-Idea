
// mergesort using recursion

var merge = function(arr,low, mid, high){
    //console.log('0000000', low, mid, high)
    let left = low
    let right = mid+1
    let temp =[]
    while(left<=mid && right<=high){
        if(arr[left]<=arr[right]){
            temp.push(arr[left])
            left++
        }else{
            temp.push(arr[right])
            right++
        }
    }
    

    while(left<=mid){
        temp.push(arr[left])
        left++
    }

    while(right<=high){
        temp.push(arr[right])
        right++
    }
    console.log('1111', low, high, temp)
    for(let i=low;i<=high;i++){
        arr[i]= temp[i-low] // temp[low -low, low+1 - low, low+2-low] => 0,1,2... -> will store fro 0 to n index in original array
    }
    console.log('22222222', temp, arr)
 }

var mergesort = function(arr,low, high){
   if(low == high) return;
   let mid = Math.floor((low+high)/2)
   mergesort(arr,low,mid)
   mergesort(arr,mid+1,high)
   merge(arr, low, mid, high)
}

var main = function(arr){
    mergesort(arr,0,arr.length-1)
    return arr
}

console.log(main([3,2,8,6,1,9,5]))