// https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1#

// tc - O(nlogn) , sc - O(1)

let findPlatform = function(arr, dep, n){
    arr = arr.sort((a,b)=> a-b)
    dep =  dep.sort((a,b)=> a-b)
   let platform =1, maxi =1
   let i=1, j=0
   while(i<n && j<n){
    if(arr[i]<= dep[j]){
        platform+=1
        i++
    }else {
        platform-=1
        j++
    }
    maxi = Math.max(maxi, platform)
   }
   return maxi
}

console.log(findPlatform( [ 0900, 0940, 0950, 1100, 1500, 1800],  [ 0910, 1200, 1120, 1130, 1900, 2000], 6)) // starttime, endtime // [ 1, 2, 4, 5 ]
console.log(findPlatform( [ 0900, 1100, 1235],  [1000, 1200, 1240], 3)) 