//https://leetcode.com/problems/pascals-triangle/


let permutation1 = function(row, col){
    let ans=1;
    console.log('rrrrr', row, 'colll', col)
    for(let i=0;i<col;i++){
        ans = ans*(row-i)
        ans = ans/(i+1)
        console.log('andssss', ans)
    }
    
    return parseInt(ans)
}

let generate = function(numRows) {
    
    let final =[]
    for(let i=1;i<=numRows;i++){
        let res =[]
        for(let j=1;j<=i;j++){ // imp
            res.push(permutation1(i-1,j-1))
        }
        final.push(res)
    }
    return final
};

console.log(generate(5)) // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
