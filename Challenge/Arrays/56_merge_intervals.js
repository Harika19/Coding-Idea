// https://leetcode.com/problems/merge-intervals/

// Time Complexity: O(N*logN) + O(N), Space Complexity: O(N)

var merge = function(intervals) {
   intervals.sort((a,b)=> a[0]-b[0]) // first ele ascending
   console.log(intervals)
   let res = [intervals[0]]
   for(let i of intervals){
    let e1= res[res.length-1][1]
    let s2 = i[0]
    let e2 = i[1]
    if(e1>=s2){
        res[res.length-1][1]= Math.max(e1,e2)
    }else{
        res.push(i)
    }
   }
   return res
  
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]])) //  [[1,6],[8,10],[15,18]]  


// optimised

// tc - O(NLOGN) +O(N)
// SC - O(1)
var mergeIntervals = function(intervals){
    if(intervals.length ==0) return [];
    // sort
    intervals.sort((a,b)=> a[0]-b[0]);
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