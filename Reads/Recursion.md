RECURSION - 2 TYPES

PARAMETERISED - 
Parameterized recursion theory allows to characterize the power of parameterization in the methods, 
using a computational model based on Moschovakis' search computability.

EXAMPLE: 
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

FUNCTIONAL - RETURNS SOMETHING

EXAMPLE:

function sum {
    if(n==0) return 0
    return n+ sum(n-1)
}


