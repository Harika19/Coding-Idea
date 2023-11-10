// https://practice.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1

var large1 = function(nums) {
    let sum =0
    let maxi=0
    for(let i=0;i<nums.length;i++){
        let c=0
        sum=0
        for(let j=i;j<nums.length;j++){
            sum+=nums[j]
            c++
            if(sum==0){
                maxi = Math.max(maxi, c)
            }
        }
    }
    return maxi
}

// calculate each sum and store in map, so use n + 0 = n

var large = function(nums) {
   let sum =0
   let maxi =0
   let map = new Map()
   for(let i=0;i<nums.length;i++){
        sum+=nums[i]
        if(sum==0){
            maxi = i+1
        }else{
            if(map.has(sum)){
                maxi = Math.max(maxi, i-map.get(sum))
            }else{
                map.set(sum, i)
            }
        }
   }
   return  maxi
}


console.log(large([-2,2,-8,1,7,10,23])) // 5 -> -2 2 -8 1 7.