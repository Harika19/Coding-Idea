// 6 August 2023

//  https://leetcode.com/problems/search-a-2d-matrix/

//Naive - n*m - tc

var searchMatrix1 = function(matrix, target) {
    for(let i of matrix){
        for(let j=0;j<i.length;j++){
            if(i[j]==target){
                return true
            }
        }
    }
    return false
};

// console.log(searchMatrix1([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13))

// binary search n*log m - TC


var searchMatrix = function(matrix, target) {
    let row = matrix.length
   let col = matrix[0].length
   let low =0
   let high = row*col -1 // total number of elements
   while(low<= high){
       let mid = Math.floor((low+high)/2)
       let first = Math.floor(mid/col)  // remenber
       if(matrix[first][mid%col]== target){
           return true
       }else if(matrix[first][mid%col] <target){
           low=mid+1
       }else{
           high=mid-1
       }
   }
   return false
};

console.log(searchMatrix([[1,3,5,7],[10,11,16],[23,30,34,60]], 23))
console.log(searchMatrix([[1],[3]], 3))
console.log(searchMatrix([[11,12,13],[15,18,25]], 18))