// https://leetcode.com/problems/set-matrix-zeroes/

const setToZero = (matrix, r, c) => {
  for(let i=0;i<matrix.length;i++){
    //console.log('1111', matrix[r][i])
    matrix[r][i]=0
  }
  for(let i=0;i<matrix.length;i++){
    matrix[i][c]=0
  }
}
var setZeroes1 = function(matrix) {
  let row = matrix.length
  let col = matrix[0].length
  let res = []
  for(let i=0;i<row;i++){
    for(let j=0;j<col;j++){
      if(matrix[i][j]==0){
        res.push([i,j])
      }
    }
  }
  for(let i of res){
    let r = i[0]
    let c =i[1]
    setToZero(matrix, r, c)
  }
  return matrix
};


console.log(setZeroes1([[1,1,1],[1,0,1],[1,1,1]])) // [[1,0,1],[0,0,0],[1,0,1]]

console.log(setZeroes1([[0,1]]))


// most optimised - TC - O(2*(N*M)), where N = no. of rows in the matrix and M = no. of columns in the matrix., SC - O(1)


var setZeroes = function(matrix) {
  let row = matrix.length
  let col = matrix[0].length
  let col0 = 1
  // Step 1: Traverse the matrix and mark 1st row & col accordingly
  for(let i=0;i<row;i++){
    for(let j=0;j<col;j++){
      if(matrix[i][j]===0){
        matrix[i][0]=0
        if(j!==0){
            matrix[0][j]=0
        }else{
            col0 = 0
        }
      }
    }
  }
// Step 2: Mark with 0 from (1,1) to (n-1, m-1):
  for(let i=1;i< row;i++){
      for(let j=1;j<col;j++){
          if(matrix[i][j]!=0){
              if(matrix[0][j]===0 || matrix[i][0]===0){
                  matrix[i][j] =0
              }
          }
      }
  }
  // Step 3: Finally mark the 1st col & then 1st row:

  if(matrix[0][0]===0){
      for(let j=0;j<col;j++){
          matrix[0][j]=0
      }
  }

  if(col0===0){
      for(let i=0;i<row;i++){
          matrix[i][0]=0
      }
  }
  return matrix
  
};

console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]])) // [[1,0,1],[0,0,0],[1,0,1]]

console.log(setZeroes([[0,1]]))