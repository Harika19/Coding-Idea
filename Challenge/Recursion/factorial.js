var factorial = function(n){
    if(n==0){
        return 1
    }else{
        return n * factorial(n-1)
    }
}

var main = function(n){
    return factorial(n)
}

console.log(main(5))