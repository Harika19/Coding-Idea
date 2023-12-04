let permutation1 = function(row){
    let ans=1;
    let res = []
    res.push(1)
    for(let i=1;i<row;i++){
        ans = ans*(row-i)
        ans = ans/(i)
        res.push(ans)
    }
    return res
}

let generate = function(numRows) {
    let final =[]
    for(let i=1;i<=numRows;i++){
        final.push(permutation1(i))
    }
    return final
};

console.log(generate(5)) // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]