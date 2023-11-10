// quick sort using recursion

var swap = function(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  };

var quick = function(arr,low, high){
    let i = low
    let j=high
    let pivot = arr[low]
    while(i<j){
        while(arr[i]<=pivot && i<=high){
            i++
        }
        while(arr[j]>pivot && j>= low){
            j--
        }
        if(i<j) swap(arr, i, j);
    }
    swap(arr, low, j);
    return j
 }

var quicksort = function(arr,low, high){
   if(low<high){
    partionIndex = quick(arr, low, high)
    quicksort(arr, low, partionIndex-1)
    quicksort(arr,partionIndex+1, high)
   }
}

var main = function(arr){
    quicksort(arr,0,arr.length-1)
    return arr
}

console.log(main([3,2,8,6,1,9,5]))