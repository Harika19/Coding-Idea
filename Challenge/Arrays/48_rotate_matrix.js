// https://leetcode.com/problems/rotate-image/


var rotate = function(matrix) {
    let row = matrix.length
    let col = matrix[0].length
    // find transpose
    for(let i=0;i<row;i++)    {
        for(let j=i;j<col;j++){
            console.log('11111',i,j,  matrix[i][j] ,matrix[j][i])
            //[matrix[j][i], matrix[i][j]]= [matrix[i][j], matrix[j][i]]
        }
    }

    for(let i=0;i<matrix.length;i++){
        matrix[i].reverse()
    }

    return matrix
};


console.log(rotate([[1,2,3],[4,5,6],[7,8,9]])) // [[7,4,1],[8,5,2],[9,6,3]]
//console.log(rotate([[1,2,3],[4,5,6]])) 