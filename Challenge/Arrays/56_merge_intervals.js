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