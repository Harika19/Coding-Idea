// https://leetcode.com/problems/spiral-matrix/

var spiralOrder = function(matrix) {
    let left = 0, top = 0, right = matrix[0].length - 1, bottom = matrix.length - 1;
    let ans = [];

    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            ans.push(matrix[top][i]);
        }
        top++;
        console.log('111', top,bottom, left, right)

        for (let i = top; i <= bottom; i++) {
            ans.push(matrix[i][right]);
        }
        right--;

        if (top <= bottom) { // in case of jus 1 row and n col, need this condition
            for (let i = right; i >= left; i--) {
                ans.push(matrix[bottom][i]);
            }
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                ans.push(matrix[i][left]);
            }
            left++;
        }
    }

    return ans;
};


//console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
console.log(spiralOrder([[1,2,3]]))