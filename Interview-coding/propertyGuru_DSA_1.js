// intervals = [ [1,3],[2,6],[8,10], [15,18]]
// Merged Interval = [[1,6],[8,10],[15,18]]


// tc - O(NLOGN) +O(N)
// SC - O(1)
var mergeIntervals = function(intervals){
    if(intervals.length ==0) return [];
    // sort
    intervals.sort((a,b)=> a[0]-b[0]);
// tc - O(NLOGN) +O(N)
// SC - O(N)    
// let result =[intervals[0]];
    // for(let i of intervals){
    //     let end1=result[result.length-1][1];
    //     let start2 = i[0];
    //     let end2= i[1];
    //     // compare to check if overlapped
    //     if(end1 >= start2){
    //         result[result.length-1][1]= Math.max(end1, end2);
    //     }else{
    //         result.push(i);
    //     }
    // }
    let index = 0;
    for(let i=1;i<intervals.length;i++){
        if(intervals[index][1]>= intervals[i][0]){
            intervals[index][1] = Math.max(intervals[index][1],intervals[i][1]);
        }else{
            index++;
            intervals[index] = intervals[i];
        }
    }
    intervals.length = index+1;
    return intervals;
}

console.log(mergeIntervals([ [1,3],[2,6],[8,10], [15,18]]))
console.log(mergeIntervals([ [1,4],[4,5]]))
console.log(mergeIntervals([ [1,4],[2,3],[3,4]]))



// set zeros

Input = [
    [0,1,1],
    [1,0,1],
    [1,1,1]
    ]
    
    Output = [
    [0,0,0],
    [0,0,0],
    [0,0,1]]
    
    var setZeroInMatrix = function(matrix){
       let row =  matrix.length;
       let col = matrix[0].length;
       let col0 =1;
       // n - row, m - col
       // TC = 2(O(M*N)), SC -O(1)
       
       
       for(let i=0;i<row;i++){
           for(let j=0;j<col;j++){
               if(matrix[i][j]==0){
                   matrix[i][0] =0;
                   if(j!=0){
                       matrix[0][j]=0
                   }else{
                      col0 =0; 
                   }
               }
           }
       }
       
       for(let i=1;i<row;i++){
           for(let j=1;j<col;j++){
               if(matrix[i][j]!==0){
                   if(matrix[0][j] ==0 ||matrix[i][0]==0){
                       matrix[i][j]=0
                   }
               }
           }
       }
       
       if(matrix[0][0]==0){
           for(let j=0;j<col;j++){
               matrix[0][j]=0;
           }
       }
       
       if(col0 ==0){
           for(let i=0;i<row;i++){
               matrix[i][0] =0;
           }
       }
       
       return matrix;
    }
    
    
    
    
    console.log(setZeroInMatrix([
    [0,1,1],
    [1,0,1],
    [1,1,1]
    ]));
    
    console.log(setZeroInMatrix([[1,2,3,4],[5,0,7,8],[0,10,11,12],[13,14,15,0]]));
    
    // [ [ 0, 0, 3, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ]
    
   

   