// https://www.youtube.com/watch?v=un6PLygfXrA&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9&index=2

// print 1 to n in 2 ways

var print1ton = function(i, n){
    if(i>n) return;
    console.log('number:', i)
    print1ton(i+1,n)
}

var print1tonBacktrack = function(i, n){
    if(i<1) return;
    print1tonBacktrack(i-1,n)
    console.log('number:', i)
}

// print n to 1 
var printN = function(i, n){
    if(i<1) return;
    console.log('number:', i)
    printN(i-1,n)
}

var print = function(n){
    const new1= n-1;
    if(new1 >=0){
        print(new1)
        console.log('number:', n)
    }
}


var main = function(n){
    print1ton(1,n) // 1 2 3 
    console.log('-----------------------------')
    print1tonBacktrack(n) // 1 2 3
    console.log('-----------------------------')
    printN(n,n) // 3 2 1
    console.log('-----------------------------')
    print(n) // 1 2 3
    console.log('-----------------------------')
}

console.log(main(3)) 
