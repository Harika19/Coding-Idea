const setToZero = (row, col, matrix, r, c) => {
    for(let i =0; i< r; i++ ){
      console.log('collll', matrix[i][col])
      matrix[i][col] = 0;
    }
    for(let j =0; j< c; j++ ){
      console.log('rowwww', matrix[row][j])
      matrix[row][j] = 0;
    }
  }
  var setZeroes = function(matrix) {
    let res = [];
    let r = matrix.length;
    let c = matrix[0].length;
    for(let i =0; i < r;i++){
      for(let j=0; j<c; j++){
        if(matrix[i][j]===0) res.push([i,j])
        console.log('aaaa', res)
      }
    }
  
    for(let ele of res ){
      let row = ele[0];
      let col = ele[1];
      console.log('sss',row, col)
      setToZero(row, col, matrix, r, c);
  
    }
  };
  
  console.log(setZeroes([[1,12,13],[1,0,4]]))
  