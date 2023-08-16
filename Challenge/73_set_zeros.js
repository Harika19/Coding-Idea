// https://leetcode.com/problems/set-matrix-zeroes/

const setToZero = (matrix, r, c) => {
  for(let i=0;i<matrix.length;i++){
    matrix[r][i]=0
  }
  for(let i=0;i<matrix.length;i++){
    matrix[i][c]=0
  }
}
var setZeroes = function(matrix) {
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


console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]])) // [[1,0,1],[0,0,0],[1,0,1]]