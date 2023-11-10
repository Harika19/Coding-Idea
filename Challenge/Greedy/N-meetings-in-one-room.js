// https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1

// Function for finding maximum meeting in one room

// tc - O(N log N) , sc - O(n)

let maxMeetings = function(s, f, n){
    let collectiveArr = []
    for(let i=0;i<n;i++){
        let temp =[]
        temp.push(i+1)
        temp.push(s[i])
        temp.push(f[i])
        collectiveArr.push(temp)
    }

    collectiveArr.sort((a,b)=> a[2]-b[2])
    
    let f_last = collectiveArr[0][2]
    let res =[]
    res.push(collectiveArr[0][0])
    console.log(collectiveArr, res)
    for(let i=1;i<collectiveArr.length;i++){
        if(collectiveArr[i][1]>f_last){
            res.push(collectiveArr[i][0])
            f_last= collectiveArr[i][2]
        }
    }
    return res
}

console.log(maxMeetings( [ 1, 3, 0, 5, 8, 5 ],  [ 2, 4, 6, 7, 9, 9 ], 6)) // starttime, endtime // [ 1, 2, 4, 5 ]
 