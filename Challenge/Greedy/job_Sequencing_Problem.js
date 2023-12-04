//  https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1#

// tc - O(NLOGN)+O(N*M), SC -O(M)  - M : MAX DEAD LINE 

let JobScheduling = function(arr,  n){
    arr = arr.sort((a,b)=> b[2]-a[2])
    console.log('1111', arr)
    let maxi = arr[0][1]
    for (let i=0;i<arr.length;i++){
        maxi = Math.max(maxi, arr[i][1])
    }
    let newArr = new Array(maxi).fill(-1)
    let count=0, profit=0
    for (let i=0;i<newArr.length;i++){
        for(let j=arr[i][1];j>0;j--){
            console.log('2222', arr[i][1],newArr )
            if(newArr[j-1] == -1){
                newArr[j-1] = arr[i][1]
                count +=1
                profit +=arr[i][2]
                break
            }
        }
    }
   console.log(count, profit) 
   return 
}

//console.log(JobScheduling([[1,4,20],[2,1,10],[3,2,40],[4,2,30]], 4)) // 3 90
console.log(JobScheduling([[1,4,20],[2,1,10],[3,1,40],[4,1,30]], 4)) // 2 60
//console.log(JobScheduling([[1,2,100],[2,1,19],[3,2,27],[4,1,25], [5,1,15]], 5))
