// sum of natural numbers using recursion

var sumFunc = function(i, sum){
    if(i<1){
        console.log('sum:', sum)
        return
    }
    sumFunc(i-1, i+sum)
}

var main = function(n){
    return  sumFunc(n,0)
}

console.log(main(4))
